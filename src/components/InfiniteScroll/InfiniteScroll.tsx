import React, { useEffect, useRef } from "react";
import "./InfiniteScroll.css";
import _ from 'lodash'
import { useInfiniteQuery } from "@tanstack/react-query";
import { PostCard } from "../PostCard/PostCard";
import { LoadingThrobber } from "../LoadingThrobber/LoadingThrobber";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Post } from "../../utils/api";

type Props = {
  queryKey: string;
  queryFn: (pageParam: number) => Promise<Post[]>;
  renderItem: (data: { pages: Post[][] }) => JSX.Element;
  className?: string;
  loadingMessage?: string;
  maxPages?: number;
  debounceDelay?: number;
  EmptyComponent: () => JSX.Element;
  InitialLoader: () => JSX.Element;
  NextPageLoader: () => JSX.Element;
  EndOfListComponent: () => JSX.Element;
}

export function InfiniteScroll({
  queryKey,
  maxPages=10,
  debounceDelay=300,
  queryFn,
  renderItem,
  className = "",
  loadingMessage,
  EmptyComponent,
  InitialLoader,
  NextPageLoader,
  EndOfListComponent
}: Props) {
  const {
    data,
    fetchNextPage,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: async ({ pageParam }) => await queryFn(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.length > 0;
      const underMaxPage = allPages.length < maxPages;
      return hasMore && underMaxPage ? allPages.length + 1 : undefined;
    },
    staleTime: Infinity,
  });

   // Add debounce to fetchNextPage
   const debouncedFetch = _.debounce(
    fetchNextPage,
    debounceDelay
  );

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          debouncedFetch();
        }
      },
      { threshold: 0.5 } // Reduced threshold for earlier trigger
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isFetching && !isFetchingNextPage)
    return <div>{<InitialLoader message={loadingMessage}/> }</div>;
  if (error) return <div><ErrorMessage message={error.message} /></div>;

  return (
    <div className={`infinite-scroll-container ${className}`}>
      <div className="infinite-scroll-items">
        {data ? <>{renderItem(data)}</> : <EmptyComponent message={"No more items to load"}/>}
      </div>

      <div ref={loadMoreRef} className="load-more-container">
        {isFetchingNextPage && <div>{<NextPageLoader/>}</div>}
        {!hasNextPage && <div><EndOfListComponent message={"No more items to load"}/></div>}
      </div>
    </div>
  );
}

export default InfiniteScroll;
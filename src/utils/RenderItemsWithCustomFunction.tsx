import { PostCard } from "../components/PostCard/PostCard"
import { Post } from "./api"

type dataProps = {
    pages: Array<Post>[]
}

export const RenderItemsWithCustomFunction = (data: dataProps): JSX.Element => {
    return (
        <>
        {data?.pages?.flatMap((page: Post[], i: number) =>
          page.map((item: Post, index: number) => (
            <PostCard
              key={`${i}-${index}`}
              post={item}
            />
          ))
        )}
        </>
    )
}

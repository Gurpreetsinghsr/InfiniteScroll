import React from 'react';
import { fetchPosts } from './utils/api';
import { RenderItemsWithCustomFunction } from './utils/RenderItemsWithCustomFunction';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { LoadingThrobber } from './components/LoadingThrobber/LoadingThrobber';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Infinite Scroll Demo
        </h1>
        <InfiniteScroll
          queryKey="posts"
          debounceDelay={100}
          maxPages={11}
          queryFn={fetchPosts}
          renderItem={RenderItemsWithCustomFunction}
          EmptyComponent={ErrorMessage}
          InitialLoader={LoadingThrobber}
          NextPageLoader={LoadingThrobber}
          EndOfListComponent={ErrorMessage}
          loadingMessage="Loading more posts..."
          className='custome-classes'
        />
      </div>
    </div>
  );
}

export default App;
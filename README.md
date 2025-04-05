# React Infinite Scroll Component

A beautiful, responsive, and highly customizable infinite scroll component for React applications.

## Features

- 🚀 Smooth infinite scrolling
- 🎨 Responsive grid layout
- ⚡ Optimized performance
- 🔄 Loading states
- ⚠️ Error handling
- 📱 Mobile-friendly
- 🎯 TypeScript support

## Installation
npm install
 or
yarn install

## Peer Dependencies

Make sure your project includes:

- React (v16.8 or later)
- React Query (@tanstack/react-query or react-query depending on version)
- lodash (for debounce)

## Usage

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
      className="custom-classes"
    />

## Features
- Optimized Data Fetching: Uses useInfiniteQuery from React Query for efficient and optimized API calls.

- Debouncing: Integrated debounce functionality via lodash to reduce the frequency of data fetch requests.

- Customizable Renderers: Pass custom components/functions to render list items, loaders, empty states, and end-of-list messages.

- Easy Integration: Minimal configuration needed to plug into your project.

- No Virtualization: Designed for simplicity and ease-of-use; virtualization is skipped for a lightweight implementation.

## How It Works
- Data Fetching:
    The component uses useInfiniteQuery to fetch data incrementally based on pages. When the user scrolls near the end, it automatically triggers queryFn to fetch the next page until maxPages is reached.
- Debouncing:
    The debounce functionality ensures that rapid scrolling does not lead to excessive API calls. The delay is customizable via the debounceDelay prop.
- Render Customization:
    You can customize how items, loaders, empty states, and the end-of-list view are rendered by passing your own components or functions.

## PropsCustomization
- Styling:
    Customize the appearance by passing your own className or overriding the default styles with CSS.


- Render Functions:
    Provide your own render logic for items or loaders to fit your application’s design.


- Debounce Delay:
    Adjust the debounceDelay to tune performance based on the expected scroll speed and API response times.

<img width="817" alt="Screenshot 2025-04-06 at 4 08 08 AM" src="https://github.com/user-attachments/assets/0a8f121b-bddf-4b23-9175-64d311cc25c8" />

// Change the Type according to the response 
export type Post = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const fetchPosts = async (pageParam: number): Promise<Post[]> => {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${pageParam}&limit=12`
    );
    return res.json();
}
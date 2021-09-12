import React from 'react';
import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("Sorted posts");
        if (sort) {
          return [...posts].sort((a, b) =>
            a[ sort].localeCompare(b[sort])
          );
        }
        return posts;
      }, [sort, posts]);
      return sortedPosts
}

export const usePosts = (posts, sort, query)=>{
    const  sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSelectedPosts = useMemo(() => {
        return sortedPosts.filter(post =>
          post.title.toLowerCase().includes(query.toLocaleLowerCase())
        );
      }, [query, sortedPosts]);
      return sortedAndSelectedPosts;
}
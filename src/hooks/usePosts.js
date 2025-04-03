import {useMemo} from "react";

export const useSortPosts = (posts, sort) => {
  return useMemo(() => {
      if (!sort){
          return posts;
      }
      return [...posts].sort((a, b) => a[sort]?.localeCompare(b[sort]))
  },[posts, sort])
}

export const useSortAndSearchPosts = (posts, sort, query) => {
    const sortedPosts = useSortPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortedPosts, query])
}

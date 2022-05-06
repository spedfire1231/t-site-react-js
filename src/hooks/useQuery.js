import { useMemo } from 'react';

export const usePosts = (query) => {

    const sortedAndSearchedPosts = useMemo( () => {

        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
        
    }, [query])

    return sortedAndSearchedPosts;

}
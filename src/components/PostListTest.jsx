//  import React, {useCallback, useMemo, useState} from 'react';
// import PostItem from "./PostItem.jsx";
//
// import PostFilter from "./PostFilter.jsx";
//
// const PostListTest = () => {
//
//     const [filter, setFilter] = useState({
//         query: '',
//         sort: ''
//     })
//     const [posts, setPosts] = useState([
//         {id: 1, title: 'JavaScript', body: 'Динамический язык для веба'},
//         {id: 2, title: 'Python', body: 'Простота и мощь для всего'},
//         {id: 3, title: 'C++', body: 'Быстрота и контроль над памятью'},
//         {id: 4, title: 'Go', body: 'Современный язык для серверов'},
//         {id: 5, title: 'Rust', body: 'Безопасность и производительность'}
//     ]);
//
//
//     const removePost = useCallback((post) => {
//         setPosts(prev => prev.filter(p => p.id !== post.id));
//     }, []);
//
//     const sortedPosts = useMemo(() => {
//         if (!filter.sort) {
//             return posts
//         }
//         return [...posts].sort((a, b) => a[filter.sort]?.localeCompare(b[filter.sort]))
//
//     }, [filter.sort, posts])
//
//     const searchAndSortedPosts = useMemo(() => {
//         if (filter.sort === 'title') {
//             return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase()))
//         }
//         if (filter.sort === 'body'){
//             return  sortedPosts.filter(p => p.body.toLowerCase().includes(filter.query.toLowerCase()))
//             }
//         return sortedPosts
//              },
//         [sortedPosts, filter.query, filter.sort])
//
//     return (
//         <div>
//             <PostFilter filter={filter} setFilter={setFilter}/>
//
//             {searchAndSortedPosts.map((post, index) => (
//                 <PostItem post={post} key={post.id} i={index + 1} remove={removePost}/>))}
//         </div>
//     );
// };
//
// export default PostListTest;
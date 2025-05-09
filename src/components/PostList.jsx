import React, {useRef, useState, useEffect} from 'react';
import PostItem from "./PostItem.jsx";
import PostForm from "./PostForm.jsx";
import PostFilter from "./PostFilter.jsx";
import MyModal from "./UI/MyModal/MyModal.jsx";
import MyButton from "./UI/MyButton/MyButton.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useSortAndSearchPosts} from "../hooks/usePosts.js";
import {PostService} from "../API/PostService.js";
import {useFetching} from "../hooks/useFetching.js";
import {getTotalPages} from "../utils/pages.js";
import {Pagination} from "./Pagination";
import MySelect from "./UI/MySelect/MySelect.jsx";
import {useObserver} from "../hooks/useObserver.js";


const PostList = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({query: '', sort: ''});
    const [visible, setVisible] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit,setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchData, isLoading, error] = useFetching(async () => {
        const res = await PostService.getPosts(limit, page);
        setTotalPages(getTotalPages(res.totalCount, limit));
        setPosts([...posts,...res.data]);
    })
    const nodesRef = useRef({});
    const searchAndSortedPosts = useSortAndSearchPosts(posts, filter.sort, filter.query);
    const headerText = isLoading ? 'Идёт загрузка данных....' : searchAndSortedPosts.length ? 'Список постов' : 'Посты не найдены';
    const options = [
        { name: '10', value: 10 },
        { name: '20', value: 20 },
        { name: '30', value: 30 },
        { name: 'показать все', value: -1 }
    ];
    const lastElement = useRef(null)

    const addNewPost = (newPost) => {
        setPosts([...posts, {...newPost, id: Date.now()}]);
        setVisible(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };
    useObserver(lastElement,page < totalPages, isLoading, ()=>{
        setPage(prev => prev +1)
    })
    useEffect(() => {
        fetchData().then(undefined)
    }, [page, limit])



    return (<div>
        <MyButton style={{marginTop: '1rem'}} onClick={() => setVisible(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
            <PostForm createPost={addNewPost}/>
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <MySelect options={options} defaultValue={'Выбрать лимит постов'} value={limit} onChange={setLimit} />

        <h1 style={{textAlign: 'center'}}>{headerText}</h1>

        {error && <p>{error}</p>}
        <TransitionGroup>
            {searchAndSortedPosts.map(post => {

                if (!nodesRef.current[post.id]) {
                    nodesRef.current[post.id] = React.createRef();
                }

                return (<CSSTransition
                    key={post.id}
                    nodeRef={nodesRef.current[post.id]}
                    timeout={500}
                    classNames="post"
                >
                    <div ref={nodesRef.current[post.id]}>
                        <PostItem post={post} remove={removePost}/>
                    </div>
                </CSSTransition>);
            })}

        </TransitionGroup>
        <div style={{height: '2px',marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'grey'}} ref={lastElement}></div>
        <Pagination onChange={setPage} page={page} totalPages={totalPages} />

    </div>);
};

export default PostList;

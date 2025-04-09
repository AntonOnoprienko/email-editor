import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching.js";
import { PostService } from "../../API/PostService.js";
import PostComment from "../../components/PostComment.jsx";
import styles from './PostIdPage.module.css';

const PostIdPage = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    const [fetchData, isLoading] = useFetching(async () => {
        const res = await PostService.getPostId(id);
        setPost(res.post);
    });

    const [fetchComments, commentsIsLoading] = useFetching(async () => {
        const res = await PostService.getPostCommentsId(id);
        setComments(res);
    });

    useEffect(() => {
        fetchData().then(undefined);
        fetchComments().then(undefined);
    }, []);

    return (
        <div className={styles.post_id_page}>
            <h1>Вы перешли на страницу поста Id: {id}</h1>

            {isLoading ? (
                <h2>Идёт загрузка...</h2>
            ) : (
                <>
                    {post && (
                        <>
                            <strong className={styles.post_title}>
                                 {post.title}
                            </strong>
                            <p className={styles.post_description}>{post.body}</p>
                        </>
                    )}
                </>
            )}

            <div className={styles.comments_block}>
                <h2>Комментарии</h2>
                {commentsIsLoading ? (
                    <p>Идёт загрузка комментариев...</p>
                ) : (
                    comments.map((c) => <PostComment key={c.id} {...c} />)
                )}
            </div>
        </div>
    );
};

export default PostIdPage;

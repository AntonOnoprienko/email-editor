import React from 'react';
import '/src/App.css'
import {useNavigate} from "react-router-dom";

const PostItem = ({post, remove}) => {
    const navigate = useNavigate()

    return (
        <div className='post'>
            <div className="post_content">
                <strong className='post_title'>{post.id}. {post.title}</strong>
                <p className='post_description'>{post.body}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginRight: 'auto', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                <button style={{background: '#007bff'}} onClick={() => {navigate(`/posts/${post.id}`)}} >Открыть</button>
                <button onClick={() => remove(post)} >Удалить</button>
            </div>

        </div>
    );
};

export default PostItem;
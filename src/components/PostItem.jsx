import React from 'react';
import '/src/App.css'

const PostItem = ({post, remove}) => {

    return (
        <div className='post' >
            <div className="post_content">
                <strong className='post_title'>{post.id}. {post.title}</strong>
                <p className='post_description'>{post.body}</p>
            </div>
            <button onClick={() => remove(post)} >Удалить пост</button>
        </div>
    );
};

export default PostItem;
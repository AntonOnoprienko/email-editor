import React from 'react';

const PostComment = ({name,email,body}) => {
    return (
        <div className='post_comment_wrapper'>
            <p className='post_comment_name'>{name}</p>
            <p className='post_comment_email'>{email}</p>
            <p className='post_comment_body'>{body}</p>
        </div>
    );
};

export default PostComment;
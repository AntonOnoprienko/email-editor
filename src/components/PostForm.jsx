import React, {useState} from 'react';
import MyInput from "./UI/MyInput.jsx";
import MyButton from "./UI/MyButton.jsx";

const PostForm = ({createPost,removePost}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    function addNewPost(event) {
        event.preventDefault();
        const newPost = {
            title: post.title,
            body: post.body
        }
        createPost(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput placeholder={'Название'} value={post.title} onChange={(e) => {
                setPost({...post, title: e.target.value})
            }}/>
            <MyInput placeholder={'Описание'} value={post.body} onChange={(e) => {
                setPost({...post, body: e.target.value})
            }}/>
            <MyButton onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;
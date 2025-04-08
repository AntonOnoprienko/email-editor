import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput.jsx";
import MyButton from "./UI/MyButton/MyButton.jsx";

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
            <MyInput placeholder={'Название'} value={post.title} type={'text'} onChange={(e) => {
                setPost({...post, title: e.target.value})
            }}/>
            <MyInput placeholder={'Описание'} value={post.body} type={'text'} onChange={(e) => {
                setPost({...post, body: e.target.value})
            }}/>
            <MyButton onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;
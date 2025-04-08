import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput.jsx";
import MyButton from "../components/UI/MyButton/MyButton.jsx";
import {AuthContext} from "../context/index.js";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {setIsAuth} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(
            prev => ({...prev,
            [name]: value
            })
        )
    }

    const login = (e) => {
        e.preventDefault()
        if(formData.login === 'admin' && formData.password === 'admin'){
            setIsAuth(true)
            localStorage.setItem('auth', 'true');
            navigate('/posts');
        } else {
            setFormData({login: '', password: ''})
            alert('Логин и пароль не верный')
        }


    }
    return (
        <div className='login_page_wrapper'>

            <form  className='login_form' onSubmit={login}>
                <h1>Авторизация</h1>
                <MyInput type={'text'} name='login' placeholder={'Введите логин'} value={formData.login} onChange={e => handleInputChange(e)} />
                <MyInput type={'password'} name='password' placeholder={'Введите пароль'} value={formData.password} onChange={e => handleInputChange(e)} />
                <MyButton style={{background: '#007bff'}}>Подтвердить</MyButton>
            </form>
        </div>
    );
};

export default LoginPage;

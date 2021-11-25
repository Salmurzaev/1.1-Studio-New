import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { signIn } from '../redux/ac/ac'
const SignInForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginInput, setLoginInput] = useState({
        email: '',
        password: '',
    })

    const loginInputHandler = (e) => {
        setLoginInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const submitLoginHandler = (e) => {
        e.preventDefault()
        dispatch(signIn( loginInput, navigate ))
        setLoginInput({
            email: '',
            password: '',
        })
        navigate('/')
    }
    return (
        <div className={style.wrapper}>
            <form onSubmit={submitLoginHandler}>
                <input
                    value={loginInput.email}
                    onChange={loginInputHandler}
                    placeholder='Ваш email'
                    type='email'
                    name='email'
                />
                <input
                    placeholder='Пароль'
                    type='password'
                    name='password'
                    value={loginInput.password}
                    onChange={loginInputHandler}
                />
                <button class={style.buttonMain} type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignInForm

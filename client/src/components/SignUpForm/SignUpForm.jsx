import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { signUp } from '../redux/ac/ac'
const SignUpForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password: '',
    })
    console.log(registerInput)
    const registerInputHandler = (e) => {
        setRegisterInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const submitRegisterHandler = (e) => {
        e.preventDefault()
        dispatch(signUp({ registerInput }))
        setRegisterInput({
            name: '',
            email: '',
            password: '',
        })
        navigate('/')
    }
    return (
        <div className={style.wrapper}>
            <form onSubmit={submitRegisterHandler}>
                <input
                    placeholder='Ваше имя'
                    type='text'
                    name='name'
                    value={registerInput.name}
                    onChange={registerInputHandler}
                />
                <input
                    placeholder='Ваш email'
                    type='email'
                    name='email'
                    value={registerInput.email}
                    onChange={registerInputHandler}
                />
        

                <input
                    placeholder='Пароль'
                    type='password'
                    name='password'
                    value={registerInput.password}
                    onChange={registerInputHandler}
                />
                <button class={style.buttonMain} type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignUpForm

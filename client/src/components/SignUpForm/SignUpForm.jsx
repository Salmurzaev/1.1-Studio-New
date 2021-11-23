import React from 'react'
import style from './style.module.css'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'


const SignUpForm = () => {
    
    return (
        <div className={style.wrapper}>
            <form>
                <input placeholder='Ваше имя' type='text' name='name' />
                <input placeholder='Ваш email' type='email' name='email' />
                <input placeholder='Пароль' type='password' name='password' />
                <div class={style.buttonMain}>
                    <a>Submit</a>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm

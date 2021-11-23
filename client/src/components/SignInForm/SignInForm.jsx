import React from 'react'
import style from './style.module.css'

const SignInForm = () => {
    return (
        <div className={style.wrapper}>
            <form>
                <input placeholder='Ваш email' type='email' name='email' />
                <input placeholder='Пароль' type='password' name='password' />

                <div class={style.buttonMain}>
                    <a>Submit</a>
                </div>
            </form>
        </div>
    )
}

export default SignInForm

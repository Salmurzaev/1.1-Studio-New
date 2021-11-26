import React from 'react'
import style from './Style.module.css'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <>
            <div className={style.main}>
                <img
                    src={logo}
                    className={style.logo}
                    width='30%'
                    alt='1.1 Studio'
                />
                <div className={style.descript}>
                    <b>1.1STUDIO</b> – крупнейшая в Кыргызстане компания по
                    производству видеоконтента: полнометражные фильмы,
                    комедийные сериалы, скетчкомы, рекламные ролики,
                    корпоративные фильмы, видеопрезентации и многое другое.
                </div>
                <div class={style.buttonMain}>
                    <Link to='/contacts'> ПОДПИСАТЬСЯ </Link>
                </div>
            </div>
        </>
    )
}

export default MainPage

import React from 'react'
import style from './Style.module.css'
import logo from '../image/logo.png'
const MainPage = () => {
    return (
        <>
            <div className={style.main}>
                <img src={logo} width='30%' alt='1.1 Studio' />
                <div className={style.descript}>
                    <b>1.1STUDIO</b> – крупнейшая в Кыргызстане компания по
                    производству видеоконтента: полнометражные фильмы,
                    комедийные сериалы, скетчкомы, рекламные ролики,
                    корпоративные фильмы, видеопрезентации и многое другое.
                </div>
                <div class='d-grid gap-2 col-6 mx-auto'>
                    <button className='btn btn-danger' type='button'>
                        ПОДПИСАТЬСЯ
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainPage

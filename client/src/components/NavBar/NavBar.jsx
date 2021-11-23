import React from 'react'
import style from './Style.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const  user  = useSelector(state => state.user)

    return (
        <div className={style.NavBar}>
            <div className={style.wrapper}>
                <Link to='/'>
                    <div className={style.navbarLinks}> Главная </div>
                </Link>
                <Link to='/team'>
                    <div className={style.navbarLinks}> Команда </div>
                </Link>
                <Link to='/advertising'>
                    <div className={style.navbarLinks}> Рекламные услуги </div>
                </Link>
                <Link to='/films'>
                    <div className={style.navbarLinks}> Фильмы </div>
                </Link>
                <Link to='/serials'>
                    <div className={style.navbarLinks}> Сериалы </div>
                </Link>
                <Link to='/job'>
                    <div className={style.navbarLinks}> Вакансии </div>
                </Link>
                <Link to='/contacts'>
                    <div className={style.navbarLinks}> Контакты </div>
                </Link>
                <Link to='/user/signin'>
                    <div className={style.navbarLinks}> Вход </div>
                </Link>
                <Link to='/user/signup'>
                    <div className={style.navbarLinks}> Регистрация </div>
                </Link>
                {
                    user ? 
                <Link to='/user/signout'>
                    <div className={style.navbarLinks}> Выход </div>
                </Link>
                : ""
                }
            </div>
        </div>
    )
}

export default NavBar

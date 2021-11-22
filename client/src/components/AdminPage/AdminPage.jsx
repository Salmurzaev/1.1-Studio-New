import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
const AdminPage = () => {
    return (
        <div className={style.adminWrapper}>
            <div className={style.wrapper}>
                <Link to='/admin/team'>
                    <div className={style.links}>Редактировать команду</div>
                </Link>
                <Link to='/admin/services'>
                    <div className={style.links}>Редактировать услуги</div>
                </Link>
                <Link to='/admin/films'>
                    <div className={style.links}>Редактировать Фильмы</div>
                </Link>
                <Link to='/admin/serials'>
                    <div className={style.links}>Редактировать Сериалы</div>
                </Link>
                <Link to='/admin/jobs'>
                    <div className={style.links}>Вакансии</div>
                </Link>
                <Link to='/admin/contacts' className={style.links}>
                    <div>Контакты</div>
                </Link>
            </div>
        </div>
    )
}

export default AdminPage

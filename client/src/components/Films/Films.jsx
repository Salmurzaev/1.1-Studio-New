import React from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
const Films = () => {
    return (
        <div className={style.filmWrapper}>
            <Search />
            <h1>Films</h1>
        </div>
    )
}

export default Films

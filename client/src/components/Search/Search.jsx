import React from 'react'
import style from './style.module.css'
const Search = () => {
    return (
        <div className={style.wrapper}>
            <input
                placeholder='Поиск...'
                type='text'
                className={style.inputSearch}
            />
        </div>
    )
}

export default Search

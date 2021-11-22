import React from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
const Serials = () => {
    const content = useSelector((state) => state.content)
    const serials = content.filter(
        (el) => el.season_id !== null && el.serial_id !== null
    )
    return (
        <div className={style.serialWrapper}>
            <Search />
            {serials.map((el) => (
                <>
                    <div>{el.title}</div>
                    <div>{el.desc}</div>
                    <div>{el.path_video}</div>
                    <div>{el.path_img}</div>
                </>
            ))}
        </div>
    )
}

export default Serials

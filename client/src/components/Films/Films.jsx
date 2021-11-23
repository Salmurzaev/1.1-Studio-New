import React from 'react'
import Carousel from '../Carousel/Carousel'
import Search from '../Search/Search'
import { useEffect } from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getContent } from '../redux/ac/ac'
const Films = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContent())
    }, [dispatch])
    const content = useSelector((state) => state.content)

    const films = content.filter(
        (el) => el.season_id === null && el.serial_id === null
    )

    return (
        <div className={style.filmWrapper}>
            <Search />
            <h1>Films</h1>
            {films.map((el) => (
                <>
                    <div>{el.title}</div>
                    <div>{el.desc}</div>
                    <div>{el.path_video}</div>
                    <div>{el.path_img}</div>
                </>
            ))}
            <Carousel/>
        </div>
    )
}

export default Films

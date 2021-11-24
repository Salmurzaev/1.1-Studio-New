import Carousel from '../Carousel/Carousel'
import React, { useState } from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getContent } from '../redux/ac/ac'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'

const Films = () => {
    let location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContent())
    }, [dispatch])
    const content = useSelector((state) => state.content)

    const films = content.filter(
        (el) => el.season_id === null && el.serial_id === null
    )

    return (
        <>
            <div>
                <Link to='/uploadfilm'>Добавить фильм</Link>
            </div>
            <div className={style.filmWrapper}>
                <Search path={location.pathname} />
                <h1>Films</h1>
                {films.map((el) => (
                    <>
                        <Link to={`/content/${el.id}`}>
                            {el.title}
                            <Button variant='contained' color='error'>
                                Смотреть
                            </Button>
                        </Link>

                        <div>{el.desc}</div>
                        <div>{el.path_video}</div>
                        <div>
                            <img src={el.path_img} alt='img' />
                        </div>
                    </>
                ))}
                <Carousel />
            </div>
        </>
    )
}

export default Films

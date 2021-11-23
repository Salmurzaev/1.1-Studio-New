import Carousel from '../Carousel/Carousel'
import React, { useState } from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getContent, getWords } from '../redux/ac/ac'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

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
            <h1 className={style.new_film}>Новинки</h1>
            <Carousel />
            <div className={style.allFilm}>
                {films.map((el) => (
                    <>
                        <div className={style.main}>
                            <div className={style.col}>
                                <img src={el.path_img} className="card-img-top" alt="..." />
                                <div className={style.card}>
                                    <h5 className={style.card_title}>{el.title}</h5>
                                    <Link to={`/content/${el.id}`}> <Button variant="contained" path={`/content/${el.id}`} description={el.desc} color="error">Смотреть</Button></Link>
                                    {/* <div className={style.card_body}>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </div>

        </div>
    )
}

export default Films

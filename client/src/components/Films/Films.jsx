import React from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getContent } from '../redux/ac/ac'
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
            <h1>Films</h1>
            {films.map((el) => (
                <>
                     <Link to={`/content/${el.id}`}> {el.title} <Button variant="contained" color="error">Смотреть</Button></Link>
                    
                    <div>{el.desc}</div>
                    <div>{el.path_video}</div>
                    <div>{el.path_img}</div>
                </>
            ))}
        </div>
    )
}

export default Films

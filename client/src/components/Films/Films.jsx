import Carousel from '../Carousel/Carousel'
import React, { useState } from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delFilm, getContent } from '../redux/ac/ac'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'
import plus from '../image/plus.png'

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
  const user = useSelector((state) => state.user)
  const words = useSelector((state)=> state.words)
  const domen = 'http://localhost:3001/'
  const path_img = domen.replace(/.\public/gmi, '')
  return (
    <div className={style.filmWrapper}>
      <Search path={location.pathname} />
      <h1 className={style.new_film}>Новинки</h1>
      <Carousel />
      {
        user?.isAdmin ?
          <div className={style.allFilmContainer}>
            <Link className={style.addFilm} to='/uploadfilm'>Добавить фильм</Link>
            <Link to='/uploadfilm'><img src={plus} className={style.plus} width='30px' height='30px' alt="plus" /></Link>
          </div>
          :
          <></>
      }
      <div className={style.allFilm}>
        {
          films?.map((el) => (
            <>
              <div className={style.main}>
                <div className={style.col}>
                  <img src={path_img} className={style.cardImgTop} alt="..." />
                  <div className={style.card}>
                    <h5 className={style.card_title}>{el.title}</h5>
                    <Link to={`/content/${el.id}`}> <Button variant="contained" path={`/content/${el.id}`} description={el.desc} color="error">Смотреть</Button></Link>
                    {
                      user?.isAdmin ?
                        <Button variant="contained" color="error" onClick={() => dispatch(delFilm(el.id))}>Delete</Button>
                        :
                        <></>
                    }
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Films

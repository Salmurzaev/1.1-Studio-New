import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delSeason, getSeason } from '../redux/ac/ac'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import style from './style.module.css'
import plus from '../image/plus.png'


const Season = () => {

  const { serial_id } = useParams()

  console.log(serial_id)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSeason(serial_id))
  }, [dispatch])

  const seasons = useSelector((state) => state.season)

  const user = useSelector((state) => state.user)
  const regEx = /.\public/gmi
  const domen = `http://localhost:3001/`

  return (
    <>
      {
        user?.isAdmin ?
          <div className={style.SeasonContainer}>
            <Link className={style.title} to={`/season/${serial_id}`}>Добавить сезон</Link>
            <Link to={`/season/${serial_id}`}><img src={plus} className={style.plus} width='30px' height='30px' alt="plus" /></Link>
          </div>
          :
          <></>
      }

      <div className={style.allFilm}>
        {
          seasons.map(el => (
            // <>
            //   <Link to={`/serials/${serial_id}/${el.id}`}> {el.title} </Link>
            //   <Button variant="contained" color="error" onClick={() => dispatch(delSeason(el.id))}>Delete</Button>
            // </>

            <div className={style.main}>
              <Link to={`/serials/${serial_id}/${el.id}`}>
              <div className={style.col}>
                <img src={domen + el.path_img.replace(regEx, '')} className={style.cardImgTop} alt="..." />
                <div className={style.card}>
                  <h5 className={style.card_title}>{el.title}</h5>
                  {/* {
                    user?.isAdmin ?
                      <Button variant="contained" color="error" onClick={() => dispatch(delSeason(el.id))}>Delete</Button>
                      :
                      <></>
                  } */}
                </div>
              </div>
              </Link>
              {
                    user?.isAdmin ?
                      <Button variant="contained" color="error" onClick={() => dispatch(delSeason(el.id))}>Delete</Button>
                      :
                      <></>
                  }
            </div>
          )
          )
        }
      </div>
    </>
  )
}
export default Season


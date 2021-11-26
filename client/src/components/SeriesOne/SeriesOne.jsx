import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { delFilm, delSerie, getSeries } from '../redux/ac/ac'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import style from './style.module.css'
import plus from '../image/plus.png'


const SeriesOne = () => {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)

  const { serial_id, season_id } = useParams()
  useEffect(() => {
    dispatch(getSeries(serial_id, season_id))
  }, [dispatch])

  const series = useSelector((state) => state.series)
  const regEx = /.\public/gmi
  const domen = `http://localhost:3001/`


  console.log(series, 'series')
  return (
    <>
      {user?.isAdmin ?
        <div className={style.allSeriesContainer}>
          <Link className={style.addSeries} to={`/newserial/${serial_id}/${season_id}`}>Добавить Cерию</Link>
          <Link to={`/newserial/${serial_id}/${season_id}`}><img src={plus} className={style.plus} width='30px' height='30px' alt="plus" /></Link>
        </div>
        :
        <></>
      }
   
    <div className={style.allFilm}>
      
      {
        series.map((el) => (

          <div className={style.main}>
            <Link to={`/content/${el.id}`}>
            <div className={style.col}>
              <img src={domen + el.path_img.replace(regEx, '')} className={style.cardImgTop} alt="..." />
              <div className={style.card}>
                <h5 className={style.card_title}>{el.title}</h5>
                
                {/* {
                  user?.isAdmin
                    ?
                    <Button variant="contained" color="error" onClick={() => dispatch(delSerie(el.id))}>Delete</Button>
                    :
                    <></>
                } */}
              </div>
            </div>
            </Link>
            {
                  user?.isAdmin
                    ?
                    <Button variant="contained" color="error" onClick={() => dispatch(delSerie(el.id))}>Delete</Button>
                    :
                    <></>
                }
          </div>
        ))
      }
    </div>
    </>
  )
}



export default SeriesOne

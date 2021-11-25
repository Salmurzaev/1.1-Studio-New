import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delSeason, getSeason } from '../redux/ac/ac'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import style from './style.module.css'



const Season = () => {

  const { serial_id } = useParams()

  console.log(serial_id)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSeason(serial_id))
  }, [dispatch])

  const seasons = useSelector((state) => state.season)

  const user = useSelector((state) => state.user)


  return (
    <div className={style.allFilm}>

      {user?.name === "admin" ?
        <div>
          <Link to={`/season/${serial_id}`}>Добавить сезон</Link>
        </div>
        :
        <></>
      }

      {seasons.map(el => (
        // <>
        //   <Link to={`/serials/${serial_id}/${el.id}`}> {el.title} </Link>
        //   <Button variant="contained" color="error" onClick={() => dispatch(delSeason(el.id))}>Delete</Button>
        // </>

        <div className={style.main}>
          <div className={style.col}>
            <img src={`http://localhost:3001/${el.path_img.replace(/.\public/gmi, '')}`} className={style.cardImgTop} alt="..." />
            <div className={style.card}>
              <h5 className={style.card_title}>{el.title}</h5>
              <Link to={`/serials/${serial_id}/${el.id}`}> <Button variant="contained" path={`/content/${el.id}`} description={el.desc} color="error">Смотреть</Button></Link>
              {user?.name === "admin" ?
                <Button variant="contained" color="error" onClick={() => dispatch(delSeason(el.id))}>Delete</Button>
                :
                <></>
              }
            </div>
          </div>
        </div>
      )
      )
      }
    </div>
  )
}

export default Season


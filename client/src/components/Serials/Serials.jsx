import React from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delSerial, getSerials } from '../redux/ac/ac'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SerialOne from '../SerialOne/SerialOne'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import plus from '../image/plus.png'
// import Button from '@mui/material/Button'

const Serials = () => {
  let location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSerials())
  }, [dispatch])
  const content = useSelector((state) => state.serials)
  const serials = content.filter(
    (el) => el.season_id !== null && el.serial_id !== null
  )

  const user = useSelector((state) => state.user)

  return (
    <>
      <div className={style.filmWrapper}>
        <Search path={location.pathname} />
        {
            user?.isAdmin ?
            <div className={style.allSerialContainer}>
              <Link className={style.addSerial}  to='/uploadserial'>Добавить Cериал</Link>
              <Link to='/uploadserial'><img src={plus} className={style.plus} width='30px' height='30px' alt="plus" /></Link>
            </div>
            :
            <></>
        }
        <div className={style.allFilm}>
          {
            serials.map((el) => (
              <div className={style.main}>
                <div className={style.col}>
                  <img
                    src={`http://localhost:3001/${el.path_img.replace(/.\public/gmi, '')}`}
                    className={style.cardImgTop}
                    alt='...'
                  />
                  <div className={style.card}>
                    <h5 className={style.card_title}>
                      {el.title}
                    </h5>
                    <Link to={`/serials/${el.id}`}>
                      {' '}
                      <Button
                        variant='contained'
                        path={`/serials/${el.id}`}
                        description={el.desc}
                        color='error'
                      >
                        Смотреть
                      </Button>
                    </Link>
                    {
                      user?.isAdmin ? (
                        <Button
                          variant='contained'
                          color='error'
                          onClick={() =>
                            dispatch(delSerial(el.id))
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <></>
                      )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}


export default Serials

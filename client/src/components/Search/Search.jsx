import React from 'react'
import style from './style.module.css'
import { clearStateSearch, getWords } from '../redux/ac/ac'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'


const Search = ({ path }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  let value = { input, path }
  useEffect(() => {
    if (input.trim()) {
      dispatch(getWords(value))
    }
    return dispatch(clearStateSearch())
  }, [input])

  const content = useSelector((state) => state.words)
  // const films = content.filter((el) => el.serial_id === null && el.season_id === null)


  return (
    <>
      <div className={style.wrapper}>
        <input
          placeholder='Поиск...'
          type='text'
          className={style.inputSearch}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className={style.allFilm}>
        {content?.length ? content.map((el) => (


          <div className={style.main}>
            <div className={style.col}>
              <img src={el.path_img} className={style.cardImgTop} alt="..." />
              <div className={style.card}>
                <h5 className={style.card_title}>{el.title}</h5>
                <Link to={`/serials/${el.id}`}> <Button variant="contained" path={`/serials/${el.id}`} description={el.desc} color="error">Смотреть</Button></Link>
              </div>
            </div>
          </div>


        )
        ) : ''}
      </div>
    </>
  )
}

export default Search

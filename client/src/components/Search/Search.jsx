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
                {content?.length
                    ? content.map((el) => (
                        <>
                            <div className={style.main}>
                                <Link
                                    to={
                                        el.serial_id === null
                                            ? `/content/${el.id}`
                                            : `/serials/${el.id}`
                                    }
                                >
                                    <div className={style.col}>
                                        <img
                                            src={`http://localhost:3001/${el.path_img.replace(
                                                /.\public/gim,
                                                ''
                                            )}`}
                                            className={style.cardImgTop}
                                            alt='...'
                                        />
                                        <div className={style.card}>
                                            <h5 className={style.card_title}>
                                                {el.title}
                                            </h5>

                                            {/* <Button
                                                variant='contained'
                                                //   path={`/serials/${el.id}`}
                                                description={el.desc}
                                                color='error'
                                            >
                                                Смотреть
                                            </Button> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ))
                    : ''}
            </div>
        </>
    )
}

export default Search


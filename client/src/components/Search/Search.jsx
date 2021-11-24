import React from 'react'
import style from './style.module.css'
import { clearStateSearch, getWords } from '../redux/ac/ac'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
            <div>{content?.length ? content.map((el) => el.title) : ''}</div>
        </>
    )
}

export default Search


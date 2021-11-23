import React from 'react'
import style from './style.module.css'
import { getWords } from '../redux/ac/ac'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Search = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState('')
    console.log(input, 'input')
    useEffect(() => {
        dispatch(getWords(input))
    }, [input])
    const content = useSelector((state) => state.words)

    return (
        <div className={style.wrapper}>
            <input
                placeholder='Поиск...'
                type='text'
                className={style.inputSearch}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default Search

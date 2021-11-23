import React from 'react'
import style from './style.module.css'
import { getWords } from '../redux/ac/ac'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Search = ({ path }) => {
    console.log('PATH', path)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    let value = {input, path}
   useEffect(() => {
        dispatch(getWords(value))
   }, [input])
    
    // const content = useSelector((state) => state.words)

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

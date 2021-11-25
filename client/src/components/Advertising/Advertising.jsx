import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setService } from '../redux/ac/ac'

const Advertising = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setService())
    }, [dispatch])
    return (
        <>
            
            <div>
                <Link to='/newadvertising'>Добавить услугу</Link>
            </div>
            <div className={style.advertisingWrapper}>
                <h1>Advertising</h1>
            </div>
        </>
    )
}

export default Advertising

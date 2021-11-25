import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import style from './style.module.css'
import { setJob } from '../redux/ac/ac'
import { useDispatch } from 'react-redux'
const Job = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setJob())
    }, [dispatch])
    return (
        <div className={style.jobWrapper}>
            <div>
                <Link to='/newJob'>Добавить вакансию</Link>
            </div>
            <h1>Job</h1>
        </div>
    )
}

export default Job

import React from 'react'
import Search from '../Search/Search'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSerials } from '../redux/ac/ac'
import { useEffect } from 'react'
import Season from '../Season/Season'
import SerialOne from '../SerialOne/SerialOne'

const Serials = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSerials())
    }, [dispatch])
    const content = useSelector((state) => state.serials)
    const serials = content.filter(
        (el) => el.season_id !== null && el.serial_id !== null
    )
    return (
        <div className={style.serialWrapper}>
            <Search />
            {serials.map((el) => (
                <>
                    <SerialOne key={el.id} serial_id = {el.id} title={ el.title}/>
                </>
            ))}
        </div>
    )
}

export default Serials

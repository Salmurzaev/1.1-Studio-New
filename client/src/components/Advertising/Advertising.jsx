import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { delSerice, setService } from '../redux/ac/ac'

const Advertising = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setService())
    }, [dispatch])

    const user = useSelector((state) => state.user)
    const service = useSelector((state) => state.service)
    return (
        <>
            <h1>Advertising</h1>
            {user?.name === 'admin' ? (
                <div>
                    <Link to='/newadvertising'>Добавить услугу</Link>
                </div>
            ) : (
                <></>
            )}

            <div className={style.advertisingWrapper}>
                <div className={style.wrapperVac}>
                    {service.map((el) => (
                        <>
                            <div className={style.serviceTitle}>
                                <h3>{el.title}</h3>
                            </div>
                            <div className={style.serviceDescript}>
                                {el.desc}
                            </div>
                            <div><button onClick={()=> dispatch(delSerice(el.id))}>Delete</button></div>
                        </>
                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default Advertising

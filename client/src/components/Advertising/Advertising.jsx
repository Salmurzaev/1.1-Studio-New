import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { delSerice, setService } from '../redux/ac/ac'
import plus from '../image/plus.png'
import Button from '@mui/material/Button'

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
            {user?.isAdmin ? (
                <div className={style.allServiceContainer}>
                    <Link className={style.addService} to='/newadvertising'>
                        Добавить услугу
                    </Link>
                    <Link to='/newadvertising'>
                        <img
                            src={plus}
                            className={style.plus}
                            width='30px'
                            height='30px'
                            alt='plus'
                        />
                    </Link>
                </div>
            ) : (
                <></>
            )}

            <div className={style.advertisingWrapper}>
                <div className={style.wrapperVac}>
                    {service.map((el) => (
                        <>
                            <div className={style.serviceTitle}>
                                <h3 className={style.titleAdvertising}>
                                    {el.title}
                                </h3>
                            </div>
                            <div className={style.serviceDescript}>
                                <p> {el.desc}</p>
                                {user.isAdmin ? (
                                    <Button
                                        variant='contained'
                                        color='error'
                                        onClick={() =>
                                            dispatch(delSerice(el.id))
                                        }
                                    >
                                        Delete
                                    </Button>
                                ) : (
                                    ''
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Advertising

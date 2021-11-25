import React from 'react'

import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { serviceAdd } from '../redux/ac/ac'

const AdvertisingForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [serviceInpit, setServiceInput] = useState({
    title: '',
    desc: '',
   
  })
  const serviceInputHandler = (e) => {
    setServiceInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }))
  }
  const submitServiceHandler = (e) => {
    e.preventDefault()
    dispatch(serviceAdd( serviceInpit ))
    setServiceInput({
      title: '',
      desc: '',

    })
    navigate('/advertising')
}
    return (
        <div className={style.wrapper}>
            <form onSubmit={submitServiceHandler}>
                <input
                    placeholder='Название услуги'
                    type='text'
                    name='title'
                    value={serviceInpit.title}
                    onChange={serviceInputHandler}
                />
                <input
                    placeholder='Описание услуги'
                    type='text'
                    name='desc'
                    value={serviceInpit.desc}
                    onChange={serviceInputHandler}
                />
                <button class={style.buttonMain} type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AdvertisingForm

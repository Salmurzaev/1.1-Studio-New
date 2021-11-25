import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { jobAdd, setModal } from '../redux/ac/ac'
const JobForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOpen = () => dispatch(setModal(true));
  const [jobInput, setJobInput] = useState({
    title: '',
    desc: '',
    curator: '',
    curator_email: '',
    curator_phone:'',
  })
  const jobInputHandler = (e) => {
    setJobInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }))
  }
  
  const submitJobHandler = (e) => {
    e.preventDefault()
    dispatch(jobAdd( jobInput ))
    setJobInput({
      title: '',
      desc: '',
      curator: '',
      curator_email: '',
      curator_phone:'',
    })
    navigate('/job')
    handleOpen()
}


  return (
    <div  className={style.wrapper}>
      
      <form onSubmit={submitJobHandler}>
                <input
                    placeholder='Название вакансии'
                    type='text'
                    name='title'
                    value={jobInput.title}
                    onChange={jobInputHandler}
                />
                <input
                    placeholder='Описание вакансии'
                    type='text'
                    name='desc'
                    value={jobInput.desc}
                    onChange={jobInputHandler}
                />
        

                <input
                    placeholder='Представитель вакансии'
                    type='text'
                    name='curator'
                    value={jobInput.curator}
                    onChange={jobInputHandler}
        />
        <input
                    placeholder='email'
                    type='email'
                    name='curator_email'
                    value={jobInput.curator_email}
                    onChange={jobInputHandler}
        />
              <input
                    placeholder='phone'
                    type='number'
                    name='curator_phone'
                    value={jobInput.curator_phone}
                    onChange={jobInputHandler}
                />
                <button class={style.buttonMain} type='submit'>
                    Submit
                </button>
            </form>
      
    </div>
  )
}

export default JobForm

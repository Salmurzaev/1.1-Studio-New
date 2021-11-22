import React, { useEffect } from 'react'
import backGroundPro from '../image/producer.png'
import photo from '../image/photo.jpg'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducer } from '../redux/ac/ac'

function OneProducer() {
 const producerList = useSelector(state=>state.producer)
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getProducer())
}, [])

  return (
    <>
      { producerList.map(el=>(
        <div className={style.OneProducer} key={el.id}>
          <p className={style.nameProducer}>{el.name}</p>
          <img src={el.photo} className={style.photo} alt="photoProducer" />
          <img src={backGroundPro} alt="backGroundPro" />
        </div>
      ))
      }


    </>
  )
}

export default OneProducer

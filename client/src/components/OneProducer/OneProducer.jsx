import React, { useEffect } from 'react'
import backGroundPro from '../image/producer.png'
import photo from '../image/photo.jpg'
import style from './style.module.css'
import backgr from '../image/backgr.png'
import logotype from '../image/logotype.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProducer } from '../redux/ac/ac'

function OneProducer() {
  const producerList = useSelector(state => state.producer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducer())
  }, [])

  return (
    <div className={style.main}>
      {producerList.map(el => (
        <div className={style.oneProducer} key={el.id}>
          <img className={style.bg} src={backgr} alt="backGroundPro" />

          <div className={style.content}>
            <div className={style.photo}>
              <img src="https://via.placeholder.com/150" class={style.placeholder} />
              <img src={el.path_img} alt="photoProducer" class={style.img} />

            </div>
            <p className={style.nameProducer}>{el.name}</p>
            <img src={logotype} alt="" className={style.logo} />
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default OneProducer

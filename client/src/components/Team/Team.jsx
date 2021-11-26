import React from 'react'
import OneProducer from '../OneProducer/OneProducer'
import style from './style.module.css'
const Team = () => {
  return (
    <div>
      <h2 className={style.producers}>продюссеры</h2>
      <OneProducer/>
    </div>
  )
}

export default Team

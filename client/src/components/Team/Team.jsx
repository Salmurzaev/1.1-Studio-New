import React from 'react'
import OneProducer from '../OneProducer/OneProducer'
import style from './style.module.css'
const Team = () => {
  return (
    <div className={style.teamWrapper}>
      <h1 className={style.producers}>Producers</h1>
      <OneProducer/>
    </div>
  )
}

export default Team

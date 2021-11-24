import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearStateSearch, getSeries, getWatchSeries } from '../redux/ac/ac'
import style from './style.module.css'


const WatchSeries = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getWatchSeries(id))
  }, [dispatch])
  const seriya = useSelector((state) => state.watchSeries)
  
  return (


    <>
      <div>
        <div className={style.videoplayer}>
          <video id="videoPlayer" className="video" width="100%"  poster={seriya.path_img} controls autoPlay>
            <source src={`http://localhost:3001/video/${id}`} type="video/mp4" />
          </video>
        </div>
      <div className={style.title}>{seriya.title}</div>
      
        <div className={style.description}>
          {seriya.desc}
        </div>
      </div>
    </>


  )
}

export default WatchSeries

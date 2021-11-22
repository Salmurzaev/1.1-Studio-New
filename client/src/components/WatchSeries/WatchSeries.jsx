import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSeries, getWatchSeries } from '../redux/ac/ac'
const WatchSeries = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getWatchSeries(id))
  }, [dispatch])
  const seriya = useSelector((state)=>state.watchSeries)
  return (
    
     
        <>
          <div>{seriya.title}</div>
          <div>{seriya.desc}</div>
          <div>{seriya.path_video}</div>
          <div>{seriya.path_img }</div>
        </>
     
    
  )
}

export default WatchSeries

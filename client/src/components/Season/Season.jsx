import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSeason } from '../redux/ac/ac'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Season = () => {
    const { serial_id } = useParams()
    console.log(serial_id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSeason(serial_id))
    }, [dispatch])

    const seasons = useSelector((state) => state.season)
    
    return (
        <div>
            <Link to={`/season/${serial_id}`}>Добавить сезон</Link>
            {seasons.map((el) => (
                <>
                    <Link to={`/serials/${serial_id}/${el.id}`}>
                        {el.title}
                    </Link>
                    <div>
                        {el.desc}
                        <img src={el.path_img} alt='season' />
                    </div>
                </>
            ))}
        </div>
    )
}

export default Season
                        

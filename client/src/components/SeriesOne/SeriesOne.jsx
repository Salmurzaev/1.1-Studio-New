import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSeries } from '../redux/ac/ac'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
const SeriesOne = () => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)

    const { serial_id, season_id } = useParams()
    useEffect(() => {
        dispatch(getSeries(serial_id, season_id))
    }, [dispatch])

    const series = useSelector((state) => state.series)

    console.log(series, 'series')
    return (
        <div>
            {series.map((el) => (
                <>
                    <Link to={`/content/${el.id}`}>
                        {el.title}
                        <Button variant='contained' color='error'>
                            Смотреть
                        </Button>
                    </Link>
                    {user?.name === "admin" ?
                    <Button variant="contained" color="error">Delete</Button>
                    :
                    <></>
                  }
                    <div>{el.desc}</div>
                    <div>{el.path_video}</div>
                    <div>{el.path_img}</div>
                </>
            ))}
        </div>
    )
}

export default SeriesOne

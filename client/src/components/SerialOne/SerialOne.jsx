import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delFilm, delSerial } from '../redux/ac/ac'
const SerialOne = ({serial_id, title}) => {

  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()


  return (
    <div>
      <Link to={`/serials/${serial_id}`}> {title}</Link>
      {user?.name === "admin" ?
                    <Button variant="contained" color="error" onClick={() => dispatch(delSerial(serial_id))}>Delete</Button>
                    :
                    <></>
                  }
    </div>
  )
}

export default SerialOne

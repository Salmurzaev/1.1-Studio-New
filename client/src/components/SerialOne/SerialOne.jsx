import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const SerialOne = ({serial_id, title}) => {

  const user = useSelector((state) => state.user)

  return (
    <div>
      <Link to={`/serials/${serial_id}`}> {title}</Link>
      {user?.name === "admin" ?
                    <Button variant="contained" color="error">Delete</Button>
                    :
                    <></>
                  }
    </div>
  )
}

export default SerialOne

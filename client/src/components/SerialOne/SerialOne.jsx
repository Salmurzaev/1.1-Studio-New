import React from 'react'
import { Link } from 'react-router-dom'
const SerialOne = ({serial_id, title}) => {
  return (
    <div>
      <Link to={`/serials/${serial_id}`}> {title}</Link>
      
    </div>
  )
}

export default SerialOne

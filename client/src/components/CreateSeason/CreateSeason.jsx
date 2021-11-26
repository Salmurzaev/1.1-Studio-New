import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'

const CreateSeason = () => {
  const [season_input, setSeason_Input] = useState({ title: '', desc: '' })
  const { serial_id } = useParams()
  const navigate = useNavigate()
    const seasonTitleHandler = (e) => {
        setSeason_Input((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

      const onSubmitInfoHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post(`http://localhost:3001/season/${serial_id}`, {
            title: season_input.title,
            desc: season_input.desc,
        })
       .then((res)=> navigate(`/season/${serial_id}/${res.data.id}`))
       
    }
    return (
        <div>
            <form onSubmit={onSubmitInfoHandler}>
                <input
                    placeholder='Название сезона'
                    name='title'
                    value={season_input.title}
                    onChange={seasonTitleHandler}
                />
                <input
                    placeholder='Описание сезона'
                    name='desc'
                    value={season_input.desc}
                    onChange={seasonTitleHandler}
                />
                
                <Button variant="contained" color="error" type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default CreateSeason

import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UploadSerial = () => {
    const navigate = useNavigate()
    const [serialTitle, setSerialTitle] = useState('')
    const [serial_id, setSerial_id] = useState('')
    const [season_id, setSeason_id] = useState('')
    const [switchForm, setSwitchForm] = useState(true)
    const [season_title, setSeasonTitle] = useState('')

    const titleHandler = (e) => {
        setSerialTitle(e.target.value)
    }

    const seasonTitleHandler = (e) => {
        setSeasonTitle(e.target.value)
    }

    const onSubmitInfoHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/serials', {
            title: serialTitle,
        })
        setSerial_id(response.data.id)
        setSwitchForm(false)
    }

    const onSubmitSeasonHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post(
            `http://localhost:3001/serials/${serial_id}`,
            { title: season_title }
        )
        if (response.status===200) {
            const data = await response.data
            setSeason_id(data.id)
            navigate(`/mult/${serial_id}/${data.id}`)
        }
    }

    return (
        <div>
            {switchForm ? (
                <form onSubmit={onSubmitInfoHandler}>
                    <input
                        placeholder='Название сериала'
                        name='title'
                        value={serialTitle}
                        onChange={titleHandler}
                    />
                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <form onSubmit={onSubmitSeasonHandler}>
                    <input
                        placeholder='Название сезона'
                        name='title'
                        value={season_title}
                        onChange={seasonTitleHandler}
                    />
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default UploadSerial

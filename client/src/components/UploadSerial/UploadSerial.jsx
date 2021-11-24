import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UploadSerial = () => {
    const navigate = useNavigate()
    const [postInput, setPostInput] = useState({ title: '', desc: '' })

    const [serial_id, setSerial_id] = useState('')
    const [season_id, setSeason_id] = useState('')
    const [switchForm, setSwitchForm] = useState(true)
    const [season_input, setSeason_Input] = useState({ title: '', desc: '' })

    const titleHandler = (e) => {
        setPostInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const seasonTitleHandler = (e) => {
        setSeason_Input((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onSubmitInfoHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/serials', {
            title: postInput.title,
            desc: postInput.desc,
        })
        setSerial_id(response.data.id)
        setSwitchForm(false)
    }

    const onSubmitSeasonHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post(
            `http://localhost:3001/serials/${serial_id}`,
            { title: season_input.title, desc: season_input.desc }
        )
        if (response.status === 200) {
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
                        value={postInput.title}
                        onChange={titleHandler}
                    />
                    <input
                        placeholder='Описание сериала'
                        name='desc'
                        value={postInput.desc}
                        onChange={titleHandler}
                    />
                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <form onSubmit={onSubmitSeasonHandler}>
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
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default UploadSerial

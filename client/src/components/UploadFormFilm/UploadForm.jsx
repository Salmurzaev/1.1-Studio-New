import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UploadFormFilm = () => {
    const navigate = useNavigate()
    const [fileData, setFileData] = useState()
    const [videoData, setvideoData] = useState()
    const [addMulter, setAddMulter] = useState(true)

    const [postInput, setPostInput] = useState({ title: '', desc: '' })

    const [id, setId] = useState('')

    const postInputHandler = (e) => {
        setPostInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }
    const filmChangeHandler = (e) => {
        console.log(e.target.files)
        setvideoData(e.target.files[0])
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const dataImg = new FormData()
        dataImg.append('image', fileData)
        dataImg.append('video', videoData)
        fetch(`http://localhost:3001/uploadfilm/${id}`, {
            method: 'POST',
            body: dataImg,
        })
            .then((result) => {
                console.log('File Sent Successful')
                navigate('/films')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const onSubmitInfoHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post(
            'http://localhost:3001/content',
            postInput
        )
        setId(response.data.id)
        setAddMulter(false)
    }

    return (
        <div className='AP'>
            {addMulter ? (
                <>
                    <h1>Название, Описание</h1>
                    <form
                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={onSubmitInfoHandler}
                    >
                        <div>
                            <input
                                placeholder='Название фильма'
                                name='title'
                                value={postInput.title}
                                onChange={postInputHandler}
                            />
                        </div>
                        <input
                            label='Discriptions'
                            multiline
                            rows={4}
                            name='desc'
                            placeholder='Описание фильма'
                            value={postInput.desc}
                            onChange={postInputHandler}
                        />
                        <div>
                            <button>Send</button>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <h1>Загрузить Постер, Фильм</h1>
                        <form onSubmit={onSubmitHandler}>
                        <span>Загрузите постер</span>
                        <input
                            type='file'
                                name='img'
                                label='Загрузите постер'
                            onChange={fileChangeHandler}
                            />
                             <span>Загрузите фильм</span>
                        <input
                            type='file'
                                name='video'
                                label='Загрузите видео'
                            onChange={filmChangeHandler}
                        />
                        <br />
                        <br />
                        <button type='submit'>Submit File to Backend</button>
                    </form>
                </>
            )}
        </div>
    )
}

export default UploadFormFilm

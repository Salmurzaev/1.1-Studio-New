import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const UploadForm = () => {
    const [fileData, setFileData] = useState()

    const [addMulter, setAddMulter] = useState(true)

    const [postInput, setPostInput] = useState({ title: '', desc: '' })

    const [id, setId] = useState('')

    const [multerVideo, setMulterVideo] = useState(true)

    const postInputHandler = (e) => {
        setPostInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('image', fileData)

        fetch(`http://localhost:3001/single/${id}`, {
            method: 'POST',
            body: data,
        })
            .then((result) => {
                console.log('File Sent Successful')
            })
            .catch((err) => {
                console.log(err.message)
            })

        setMulterVideo(false)
        // setAddMulter(false)
        // navigate('')
    }

    const onSubmitInfoHandler = async (e) => {
        e.preventDefault()

        console.log(postInput)
        // fetch("http://localhost:3001/addInfo", {
        //       method: "POST",
        //       body: JSON.stringify(postInput),
        //   })
        const response = await axios.post(
            'http://localhost:3001/content',
            postInput
        )
        console.log(response)
        setId(response.data.id)
        setAddMulter(false)
    }

    const [value, setValue] = React.useState('Controlled')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='AP'>
            {addMulter ? (
                <>
                    <h1>Установить название\год\описание</h1>
                    <form
                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={onSubmitInfoHandler}
                    >
                        <div>
                            <input
                                placeholder='Title'
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
                            placeholder='Discriptions'
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
                    <h1>Загрузить видео/постер</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input type='file' onChange={fileChangeHandler} />
                        <br />
                        <br />
                        <button type='submit'>Submit File to Backend</button>
                    </form>
                </>
            )}
        </div>
    )
}

export default UploadForm

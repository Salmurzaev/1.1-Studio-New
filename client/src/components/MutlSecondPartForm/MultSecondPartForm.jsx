import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ProgresBar from '../ProgresBar/ProgresBar'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { setModal } from '../redux/ac/ac'
import style from './style.module.css'

const MultSecondPartForm = () => {
    const navigate = useNavigate()
    const [postInput, setPostInput] = useState({ title: '', desc: '' })
    const [addMulter, setAddMulter] = useState(true)
    const [progress, setProgress] = useState(0);
    const [persent, setPersent] = useState(0)
    const [contentId, setContentId] = useState('')
    const [fileData, setFileData] = useState()
    const [videoData, setvideoData] = useState()
    const [serialData, setSerialData] = useState()
    const [seasonData, setSeasonData] = useState()
    const dispatch = useDispatch()

  const handleOpen = () => dispatch(setModal(true));

    const postInputHandler = (e) => {
        setPostInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const { serial_id, season_id } = useParams()

    const info = {
        title: postInput.title,
        desc: postInput.desc,
        serial_id: serial_id,
        season_id: season_id,
    }
    const onSubmitInfoHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/content', info)
        setContentId(response.data.id)
        setAddMulter(false)
    }
    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }
    const filmChangeHandler = (e) => {
        setvideoData(e.target.files[0])
    }
    const serialChangeHandler = (e) => {
        setSerialData(e.target.files[0])
    }
    const seasonChangeHandler = (e) => {
        setSeasonData(e.target.files[0])
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const dataImg = new FormData()
        dataImg.append('image', fileData)
        dataImg.append('video', videoData)
        dataImg.append('path_imgserial', serialData)
        dataImg.append('path_imgseason', seasonData)
        console.log(dataImg, 'dataImg')

        const options = {
            onUploadProgress: progress => {
                const { total, loaded } = progress;
                const totalSizeInMB = total / 1000000;
                const loadedSizeInMB = loaded / 1000000;
                const uploadPercentage = (loadedSizeInMB / totalSizeInMB) * 100;
                setProgress(uploadPercentage.toFixed(2))
                console.log("total size in MB ==> ", totalSizeInMB);
                console.log("uploaded size in MB ==> ", loadedSizeInMB);
                setPersent(uploadPercentage)
            }
        }

        axios.post(`http://localhost:3001/uploadfilm/${contentId}`, dataImg, options)
            .then((result) => {
                console.log('File Sent Successful')
                navigate('/serials')
                handleOpen()
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div>
            {addMulter ? (
                <>
    
                    <form onSubmit={onSubmitInfoHandler}>
                        <input
                            placeholder='Название серии'
                            name='title'
                            value={postInput.title}
                            onChange={postInputHandler}
                        />
                        <input
                            label='Descriptions'
                            name='desc'
                            placeholder='Описание серии'
                            value={postInput.desc}
                            onChange={postInputHandler}
                        />
                       <Button variant="contained" color="error" type='submit'>Submit</Button>
                    </form>
                </>
            ) : (
                <>
                   
                    <form onSubmit={onSubmitHandler}>
                        <span className={style.poster}>Постер серии</span>
                        <input
                            type='file'
                            name='img'
                            onChange={fileChangeHandler}
                        />

                        <span className={style.poster}>Постер Сериала</span>
                        <input
                            type='file'
                            name='path_imgserial'
                            onChange={serialChangeHandler}
                        />
                        <span className={style.poster}>Постер Сезона</span>
                        <input
                            type='file'
                            name='path_imgseason'
                            onChange={seasonChangeHandler}
                        />
                        <span className={style.poster}>Видео серии</span>
                        <input
                            type='file'
                            name='video'
                            onChange={filmChangeHandler}
                        />
                        <br />
                        <div className={style.load}> Загрузка: {Math.floor(persent)} %</div>
                        <ProgresBar progress={progress} />
                        <br />
                        <Button type='submit' variant="contained" color="error">Submit File to Backend</Button>
                    </form>
                </>
            )}
        </div>
    )
}

export default MultSecondPartForm

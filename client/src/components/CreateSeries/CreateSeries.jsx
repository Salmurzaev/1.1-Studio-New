import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setModal } from '../redux/ac/ac'

const CreateSeries = () => {
  const [postInput, setPostInput] = useState({ title: '', desc: '' })
  const { serial_id, season_id } = useParams()
  const [addMulter, setAddMulter] = useState(true)
  const [contentId, setContentId] = useState('')
  const [seasonData, setSeasonData] = useState()
  const [fileData, setFileData] = useState()
  const [videoData, setvideoData] = useState()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleOpen = () => dispatch(setModal(true));

  const postInputHandler = (e) => {
    setPostInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const info = {
    title: postInput.title,
    desc: postInput.desc,
    serial_id: serial_id,
    season_id: season_id,
  }
  const onSubmitInfoHandler = async (e) => {
    e.preventDefault()
    const response = await axios.post(
      `http://localhost:3001/season/${serial_id}/${season_id}`,
      info
    )

    setContentId(response.data.id)
    setAddMulter(false)
  }
  const fileChangeHandler = (e) => {
    console.log("fileChangeHandler==================================", e.target.files)
    setFileData(e.target.files[0])
  }
  const filmChangeHandler = (e) => {
    console.log("filmChangeHandler==================================", e.target.files)
    setvideoData(e.target.files[0])
  }
  const seasonChangeHandler = (e) => {
    console.log("seasonChangeHandler================================", e.target.files)
    setSeasonData(e.target.files[0])
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const dataImg = new FormData()
    dataImg.append('image', fileData)
    dataImg.append('video', videoData)

    dataImg.append('path_imgseason', seasonData)

    fetch(`http://localhost:3001/newseries/${serial_id}/${season_id}/${contentId}`, {
      method: 'POST',
      body: dataImg,
    })
      .then((res) => {
        navigate('/serials')
        handleOpen()
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
            <button>Send</button>
          </form>
        </>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <span>Постер серии</span>
          <input
            type='file'
            name='img'
            onChange={fileChangeHandler}
          />

          <span>Постер Сезона</span>
          <input
            type='file'
            name='path_imgseason'
            onChange={seasonChangeHandler}
          />
          <span>Видео серии</span>
          <input
            type='file'
            name='video'
            onChange={filmChangeHandler}
          />
          <br />
          <br />
          <button type='submit'>Submit File to Backend</button>
        </form>
      )}
    </div>
  )
}

export default CreateSeries

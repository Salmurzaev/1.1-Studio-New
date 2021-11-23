import React from 'react'
import styles from './style.css'
export default function VideoPlayer() {
    return (

        <div className="all_block">
            <div className="rightBlock">
                <div className="videopleer">
                    <video id="videoPlayer" className="video" width="100%" muted="muted" loop='true' autoPlay>
                        <source src="http://localhost:3001/video" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="gradient">
                <div className="content">
                    <div className="film_desc">
                        <div className="descrip_title">Название фильма</div>
                        <div className="descrip_style">Описание фильма</div>
                        <div className="descrip_style">Актерский состав:</div>
                        <div className="descrip_style">Год выпуска</div>
                    </div>
                </div>
            </div>
        </div>
    )
}










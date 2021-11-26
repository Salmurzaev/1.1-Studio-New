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
                        <div className="descrip_title">Трансформеры</div>
                        <div className="descrip_style">Обычный подросток, Сэм Уитвикки озабочен повседневными хлопотами — школа, друзья, машины, девочки. Не ведая о том, что он является последним шансом человечества на спасение, Сэм вместе со своей подругой Микаэлой оказывается вовлеченным в противостояние Автоботов и Десептиконов. Только тогда Сэм понимает истинное значение семейного девиза Уитвикки — «без жертв нет победы!»</div>
                        <div className="descrip_style">Актерский состав: Шайа ЛаБаф,Меган Фокс</div>
                        <div className="descrip_style">Год выпуска: 2007</div>
                    </div>
                </div>
            </div>
        </div>
    )
}










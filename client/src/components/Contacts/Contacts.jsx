import React from 'react'
import style from './style.module.css'
import contact from '../image/contact.png'

const Contacts = () => {
    return (
        <div className={style.contactWrapper}>
            <div className={style.main}>
                <div className={style.content}>
                    <h1>Contacts</h1>
                    <img src={contact} alt='contact' />
                </div>
                <div className={style.info}>
                    <p className={style.address}>
                        Проспект Чынгыза Айтматова, 90/4
                    </p>
                    <div className={style.allBlock}>
                        <div className={style.leftSide}>
                            <p className={style.phone}>(966) 222168137</p>
                            <p className={style.email}>@1.1studio</p>
                        </div>
                        <div className={style.rightSide}>
                            <p className={style.emailTwo}>@1.1studio</p>
                            <p className={style.site}>www.1.1studio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts

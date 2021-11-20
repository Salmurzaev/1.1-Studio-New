import React from 'react'
import style from './style.module.css'
import { Route, Routes } from 'react-router'
import Advertising from '../Advertising/Advertising'
import MainPage from '../MainPage/MainPage'
import Team from '../Team/Team'
import Films from '../Films/Films'
import Serials from '../Serials/Serials'
import Job from '../Job/Job'
import Contacts from '../Contacts/Contacts'


export default function MainRouter() {
    return (
        <div className={style.mainRouterWrapper}>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/team' element={<Team />} />
                <Route path='/advertising' element={<Advertising />} />
                <Route path='/films' element={<Films />} />
                <Route path='/serials' element={<Serials />} />
                <Route path='/job' element={<Job />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </div>
    )
}

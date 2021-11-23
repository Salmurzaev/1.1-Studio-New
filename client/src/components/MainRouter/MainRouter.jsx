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
import AdminPage from '../AdminPage/AdminPage'
import AdminTeamList from '../AdminTeamList/AdminTeamList'
import AdminServicesList from '../AdminServicesList/AdminServicesList'
import AdminFilmsList from '../AdminFilmsList/AdminFilmsList'
import AdminSerialsList from '../AdminSerialsList/AdminSerialsList'
import AdminJobsList from '../AdminJobsList/AdminJobsList'
import AdminContactsList from '../AdminContactsList/AdminContactsList'
import UploadForm from '../UploadForm/UploadForm'



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
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/admin/team' element={<AdminTeamList />} />
                <Route path='/admin/services' element={<AdminServicesList />} />
                <Route path='/admin/films' element={<AdminFilmsList />} />
                <Route path='/admin/serials' element={<AdminSerialsList />} />
                <Route path='/admin/jobs' element={<AdminJobsList />} />
                <Route path='/admin/contacts' element={<AdminContactsList />} />
                <Route path='/upload' element={<UploadForm />} />
            </Routes>
        </div>
    )
}

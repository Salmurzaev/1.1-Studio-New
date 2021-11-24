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
import Season from '../Season/Season'
import SeriesOne from '../SeriesOne/SeriesOne'
import WatchSeries from '../WatchSeries/WatchSeries'
import Words from '../Words/Words'

import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import UploadFormFilm from '../UploadFormFilm/UploadForm'
import UploadSerial from '../UploadSerial/UploadSerial'
import MultSecondPartForm from '../MutlSecondPartForm/MultSecondPartForm'





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
                <Route path='/serials/:serial_id/' element={<Season />} />
                <Route path='/serials/:serial_id/:season_id' element={<SeriesOne />} />
                <Route path='/content/:id' element={<WatchSeries />} />
                <Route path='/search' element={<Words />} />
                <Route path='/user/signin' element={<SignInForm />} />
                <Route path='/user/signup' element={<SignUpForm />} />
                <Route path='/uploadfilm' element={<UploadFormFilm />} />
                <Route path='/uploadserial' element={<UploadSerial />} />
                <Route path='/mult/:serial_id/:season_id' element={<MultSecondPartForm />} />
            </Routes>
        </div>
    )
}

import * as React from 'react';
import style from './App.module.css'

import MainRouter from './components/MainRouter/MainRouter'
import BasicModal from './components/Modal/Modal'
import NavBar from './components/NavBar/NavBar'

function App() {

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


    return (
        <div className={style.AppWrapper}>
            <NavBar />
            <MainRouter />
            <BasicModal />
        </div>
    )
}

export default App

import style from './App.module.css'

import MainRouter from './components/MainRouter/MainRouter'
import NavBar from './components/NavBar/NavBar'

function App() {
    return (
        <div className={style.AppWrapper}>
            <NavBar />
            <MainRouter/>
            {/* </MainRouter> */}
        </div>
    )
}

export default App

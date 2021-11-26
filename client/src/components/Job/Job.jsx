import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import style from './style.module.css'
import { delJob, setJob } from '../redux/ac/ac'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
const Job = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setJob())
  }, [dispatch])

  const user = useSelector((state) => state.user)

  const job = useSelector((state) => state.job)

  return (
    <>
        {user?.isAdmin ?
          <div className={style.jobAdd}>
            <Link className={style.addJob} to='/newJob'>Добавить вакансию</Link>
          </div>
          :
          <></>
        }
      <div className={style.jobWrapper}>
        <div className={style.wrapperVac}>
          {job.map((el) => (
            <>
            <div className={style.job}>
              <div className={style.wrapperName}>
                <div>
                  <h3>{el.title}</h3>
                </div>
                {/* <div className={style.description}>
                  <div className={style.sem}>
                    {el.desc}
                    </div>
                </div> */}
              </div>

              <div className={style.description}>
                  <div className={style.sem}>
                    {el.desc}
                    </div>
                </div>

              <div className={style.svize}>
                <div>
                  {el.curator}
                </div>
                <div>
                  {el.curator_email}
                </div>
                <div>
                  {el.curator_phone}
                </div>
              </div>
              {user?.isAdmin ?
                <div className={style.button}>
                  <div>
                  <Button  variant='contained'
                        color='error' onClick={() => dispatch(delJob(el.id))}>Delete</Button>
                  </div>
                </div>
                :
                <></>
              }

            </div>
            <hr/>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Job

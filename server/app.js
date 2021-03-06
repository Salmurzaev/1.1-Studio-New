require('dotenv').config()
const express = require('express')
const path = require('path')
const redis = require('redis')
const cors = require('cors')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()

const app = express()

const PORT = process.env.PORT || 3001

const contentRouter = require('./routes/contentRouter')
const serialRouter = require('./routes/serialRouter')
const seasonRouter = require('./routes/seasonRouter')
const teamRouter = require('./routes/teamRouter')
const servicesRouter = require('./routes/servicesRouter')
const vacancyRouter = require('./routes/vacancyRouter')
const projectRouter = require('./routes/projectRouter')
const userRouter = require('./routes/userRouter')
const videoRouter = require('./routes/videoRouter')
const wordsRouter = require('./routes/wordsRouter')
const uploadFilm = require('./routes/uploadFilm')
const createSeason = require('./routes/seasonCreateRouter')
const newSeries = require('./routes/newSeriesRouter')
const createOneSeries = require('./routes/createSeriesOneRouter')

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.env.PWD, 'public')))

app.use(
    session({
        name: 'sid',
        store: new RedisStore({ client: redisClient }),
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        resave: false,
    })
)

app.use((req, res, next) => {
    res.locals.user = req.session.user
    next()
})

app.use('/content', contentRouter)
app.use('/seasons', seasonRouter)
app.use('/serials', serialRouter)
app.use('/search', wordsRouter)
app.use('/team', teamRouter)
app.use('/services', servicesRouter)
app.use('/vacancies', vacancyRouter)
app.use('/projects', projectRouter)
app.use('/user', userRouter)
app.use('/video', videoRouter)
app.use('/search', wordsRouter)
app.use('/uploadfilm', uploadFilm)
app.use('/season', createSeason)
app.use('/newseries',newSeries)
app.use('/newserial', createOneSeries)

app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})

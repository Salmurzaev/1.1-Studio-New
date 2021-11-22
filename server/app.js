require('dotenv').config()
const express = require('express')
const path = require('path');
const redis = require('redis')
const cors = require('cors')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()
const multer  = require('multer')



const app = express()

const PORT = process.env.PORT || 3001


const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});


const upload = multer({ storage: fileStorageEngine });



const contentRouter = require('./routes/contentRouter')
const serialRouter = require('./routes/serialRouter')
const seasonRouter = require('./routes/seasonRouter')
const teamRouter = require('./routes/teamRouter')
const servicesRouter = require('./routes/servicesRouter')
const vacancyRouter = require('./routes/vacancyRouter')
const projectRouter = require('./routes/projectRouter')

// const videoRouter = require('./routes/videoRouter')
// const wordsRouter = require('./routes/wordsRouter')


app.use(cors({credentials:true, origin: 'http://localhost:3000'}))
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
app.use('/team', teamRouter)
app.use('/services', servicesRouter)
app.use('/vacancies', vacancyRouter)
app.use('/projects', projectRouter)
// app.use('/search', wordsRouter)


app.post('/single', upload.single('image'), (req, res) => {
  // req.file - файл `avatar`
  // req.body сохранит текстовые поля, если они будут
  console.log('FILE',req.file)
  console.log('BODY',req.body)
  res.send("Single FIle upload success");
})


app.post('/addInfo', async (req, res) => {
 
})



app.listen(PORT, () => {
    console.log("Server started on port", PORT);
})

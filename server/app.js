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
    cb(null, __dirname+"/public/uploads"); //important this is a direct path fron our current file to storage location
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
const userRouter = require('./routes/userRouter')


const videoRouter = require('./routes/videoRouter')
const wordsRouter = require('./routes/wordsRouter');
const {Content} = require('./db/models');


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
// app.use('/video', videoRouter)
app.use('/search', wordsRouter)
app.use('/team', teamRouter)
app.use('/services', servicesRouter)
app.use('/vacancies', vacancyRouter)
app.use('/projects', projectRouter)
app.use('/user', userRouter)
app.use('/video', videoRouter)
// app.use('/search', wordsRouter)


app.post('/single/:id', upload.single('image'), async (req, res) => {
  const id = req.params.id
  
  const newDataContent = await Content.update({ path_img: req.file.path }, {
    where: {
      id
    }
  })
  console.log('FILE',req.file)
  
  res.send("Single FIle upload success");
})




app.listen(PORT, () => {
    console.log("Server started on port", PORT);
})

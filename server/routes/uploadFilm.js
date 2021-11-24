const router = require('express').Router()
const path = require('path')
const { Content, Season, Serial, Rating } = require('../db/models')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/uploads') //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    },
})

const upload = multer({
    storage: fileStorageEngine,
})

router.route('/:id').post(
    upload.fields([
        {
            name: 'image',
            maxCount: 1,
        },
        { name: 'video', maxCount: 1 },
    ]),
    async (req, res) => {
        const id = req.params.id
        const path_video = `http://localhost:3001/uploads/${req.files.video[0].filename}`
        const path_img = `http://localhost:3001/uploads/${req.files.image[0].filename}`
        const newDataContent = await Content.update(
            { path_img, path_video },
            {
                where: {
                    id,
                },
            }
        )

        res.send('Single FIle upload success')
    }
)

module.exports = router

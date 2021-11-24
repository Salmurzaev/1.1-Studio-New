const router = require('express').Router()
const path = require('path')
const { Content, Season, Serial, Rating } = require('../db/models')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/uploads') //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
          }
        cb(null, getRandomInt(0, 1000000) + file.originalname)
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
        { name: 'path_imgserial', maxCount: 1 },
        { name: 'path_imgseason', maxCount: 1 },
    ]),
    async (req, res) => {
        // console.log(req.files,'===========================')
        const id = req.params.id
        if (
            (await req.files.video) &&
            (await req.files.image) &&
            (await req.files.path_imgserial) &&
            (await req.files.path_imgseason)
        ) {
            const path_video = `http://localhost:3001/uploads/${req.files.video[0].filename}`
            const path_img = `http://localhost:3001/uploads/${req.files.image[0].filename}`
            const path_imgserial = `http://localhost:3001/uploads/${req.files.path_imgserial[0].filename}`
            const path_imgseason = `http://localhost:3001/uploads/${req.files.path_imgseason[0].filename}`
            const newDataContent = await Content.update(
                { path_img, path_video },
                {
                    where: {
                        id,
                    },
                }
            )
            const content = await Content.findOne({ where: { id } })
            // console.log(newDataContent)
            await Season.update(
                { path_img: path_imgseason },
                { where: { id: content.season_id } }
            )
            await Serial.update(
                { path_img: path_imgserial },
                { where: { id: content.serial_id } }
            )
            res.sendStatus(200)
        }


        else {
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
            res.sendStatus(200)
        }
        
    }
)

module.exports = router

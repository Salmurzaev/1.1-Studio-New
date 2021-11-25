const router = require('express').Router()
const { Content, Season, Serial } = require('../db/models')
const path = require('path')
const multer = require('multer')
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/uploads') //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
        function getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.random() * (max - min) + min //The maximum is exclusive and the minimum is inclusive
        }
        cb(null, getRandomInt(0, 100) + file.originalname)
    },
})

const upload = multer({
    storage: fileStorageEngine,
})

router.route('/:serial_id/:season_id/:contentId').post(
    upload.fields([
        {
            name: 'image',
            maxCount: 1,
        },
        { name: 'video', maxCount: 1 },
        { name: 'path_imgseason', maxCount: 1 },
    ]),
    async (req, res) => {
        const { serial_id, season_id, contentId } = req.params
        const path_video = `./public/uploads/${req.files.video[0].filename}`
        const path_img = `./public/uploads/${req.files.image[0].filename}`
        const path_imgseason = `./public/uploads/${req.files.path_imgseason[0].filename}`
        const newDataContent = await Content.update(
            { path_img, path_video },
            {
                where: {
                    id: contentId,
                },
            }
        )
        await Season.update({ path_img:path_imgseason }, { where: { id: season_id } })
        res.sendStatus(200)
    }
)
module.exports = router

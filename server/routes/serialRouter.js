const router = require('express').Router()
const { Season, Serial, Content } = require('../db/models')
const adminCheck = require('../middleware/adminCheck')
const { rm } = require('fs/promises');

router
    .route('/')
    .get(async (req, res) => {
        try {
            const serials = await Serial.findAll()
            res.json(serials)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck, async (req, res) => {
        try {
            const newSerial = await Serial.create({ ...req.body })
            res.json(newSerial)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const seasons = await Season.findAll({ where: { serial_id: req.params.id } })
            res.json(seasons)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck, async (req, res) => {
        try {
            const newSeason = await Season.create({ title: req.body.title, serial_id: req.params.id })
            res.json(newSeason)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
    .delete(adminCheck, async (req, res) => {
        const regEx = /http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)\//mg
        const path = './public/uploads/'
        try {
            const content = await Content.findAll({ where: { id: req.params.id } })

            content.forEach(async (element) => {
                try {
                    const { dataValues } = element
                    const pathImg = dataValues.path_img.split(regEx)
                    const pathVideo = dataValues.path_video.split(regEx)
                    const videoFileName = pathVideo.pop()
                    const imgFileName = pathImg.pop()
                    await rm(path + videoFileName)
                    await rm(path + imgFileName)
                    await Content.destroy({ where: { id: dataValues.id } })
                } catch (error) {
                    console.log(error)
                }
            })
            const seasons = await Season.findAll({ where: { serial_id: req.params.id } })

            seasons.forEach(async (element) => {
                try {
                    const { dataValues } = element
                    const pathImg = dataValues.path_img.split(regEx)
                    const imgFileName = pathImg.pop()
                    await rm(path + imgFileName)
                    await Season.destroy({ where: { id: dataValues.id } })
                } catch (error) {
                    console.log(error)
                }
            })

                        const serial = await Serial.findOne({ where: { id: req.params.id } })
            const { dataValues } = serial
            const pathImg = dataValues.path_img.split(regEx)
            const imgFileName = pathImg.pop()
            try {
                await rm(path + imgFileName)
                await Serial.destroy({ where: { id: req.params.id } })
                console.log("Serial successfully deleted")
            } catch (error) {
                console.log(error)
            }
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
router.route('/:serial_id/:season_id')
    .get(async (req, res) => {
        try {
            const content = await Content.findAll({
                where: {
                    serial_id: req.params.serial_id,
                    season_id: req.params.season_id
                }
            })
            res.json(content)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }

    })


module.exports = router

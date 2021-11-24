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
        try {
            const serial = await Serial.findOne({ where: { id: req.params.id } })
            const { dataValues } = serial
            const regEx = /http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)\//mg
            const pathImg = dataValues.path_img.split(regEx)
            const imgFileName = pathImg.pop()
            const path = './public/uploads/'
            try {
                await rm(path + imgFileName)
                await Serial.destroy({ where: { id: req.params.id } })
                console.log("Img file successfully deleted")
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
        res.json(content)
    })


module.exports = router

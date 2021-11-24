const router = require('express').Router()
const { Season, Serial, Content } = require('../db/models')
const adminCheck = require('../middleware/adminCheck')

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
            console.log(req.body, req.params.id, 'asd')
            const newSeason = await Season.create({ ...req.body,  serial_id: req.params.id })
            res.json(newSeason)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
    .delete(adminCheck, async (req, res) => {
        try {
            await Serial.destroy({ where: { id: req.params.id } })
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

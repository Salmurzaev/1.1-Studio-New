const router = require('express').Router()
const { Season, Serial, Content } = require('../db/models')

router.route('/')
    .get(async (req, res) => {
        const serials = await Serial.findAll()
        res.json(serials)
    })
    .post(async (req, res) => {
        const newSerial = await Serial.create({ ...req.body })
        res.json(newSerial)
    })
router.route('/:id')
    .get(async (req, res) => {
        const seasons = await Season.findAll({ where: { serial_id: req.params.id } })
        res.json(seasons)
    })
    .post(async (req, res) => {
        const newSeason = await Season.create({ title: req.body.title, serial_id: req.params.id })
        res.json(newSeason)
    })
    .delete(async (req, res) => {
        await Serial.destroy({ where: {id: req.params.id}})
        res.sendStatus(200)
    })
router.route('/:serial_id/:season_id')
    .get(async(req, res) => {
        const content = await Content.findAll({where: {
            serial_id: req.params.serial_id,
            season_id: req.params.season_id
        }})
        res.json(content)
    })

    router.route('/:serial_id/:season_id')
    .get(async(req, res) => {
        const content = await Content.findAll({where: {
            serial_id: req.params.serial_id,
            season_id: req.params.season_id
        }})
        res.json(content)
    })

module.exports = router
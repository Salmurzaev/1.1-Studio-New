const router = require('express').Router()
const { Serial } = require('../db/models')

router.route('/')
    .get(async (req, res) => {
        const allSerials = await Serial.findAll()
        res.json(allSerials)
    })

router.route('/:id')
    .get(async (req, res) => {
        const serial = await Serial.findOne({ where: { id: req.params.id } })
        res.json(serial)
    })

router.route('/:id/:season_id')
    .get(async (req, res) => {
        
    })

module.exports = router
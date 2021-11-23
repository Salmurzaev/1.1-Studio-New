const router = require('express').Router()
const { Team } = require('../db/models')

router.route('/')
    .get(async (req, res) => {
        const team = await Team.findAll()
        res.json(team)
    })
    .post(async (req, res) => {
        const newPerson = await Team.create({ ...req.body })
        res.json(newPerson)
    })
router.route('/:id')
    .delete(async (req, res) => {
        await Serial.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    })

module.exports = router
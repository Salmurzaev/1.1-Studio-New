const router = require('express').Router()
const { Team } = require('../db/models')
const adminCheck = require('../middleware/adminCheck')

router.route('/')
    .get(async (req, res) => {
        try {
            const team = await Team.findAll()
            res.json(team)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck,async (req, res) => {
        try {
            const newPerson = await Team.create({ ...req.body })
            res.json(newPerson)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
router.route(adminCheck,'/:id')
    .delete(async (req, res) => {
        try {
            await Serial.destroy({ where: { id: req.params.id } })
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })

module.exports = router
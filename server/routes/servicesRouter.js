const router = require('express').Router()
const { Service } = require('../db/models')
const adminCheck = require('../middleware/adminCheck')

router.route('/')
    .get(async (req, res) => {
        try {
            const services = await Service.findAll()
            res.json(services)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck, async (req, res) => {
        try {
            const newService = await Service.create({ ...req.body })
            res.json(newService)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
router.route('/:id')
    .get(async (req, res) => {
        try {
            const service = await Service.findOne({ where: { id: req.params.id } })
            res.json(service)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .delete(adminCheck, async (req, res) => {
        try {
            await Service.destroy({ where: { id: req.params.id } })
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })

module.exports = router
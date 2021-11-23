const router = require('express').Router()
const { Service } = require('../db/models')
const  adminCheck  = require('../middleware/adminCheck')

router.route('/')
    .get(async (req, res) => {
        const services = await Service.findAll()
        res.json(services)
    })
    .post(adminCheck, async (req, res) => {
        const newService = await Service.create({ ...req.body })
        res.json(newService)
    })
router.route('/:id')
    .get(async (req, res) => {
        const service = await Service.findOne({ where: { id: req.params.id } })
        res.json(service)
    })
    .delete(adminCheck, async (req, res) => {
        await Service.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    })

module.exports = router
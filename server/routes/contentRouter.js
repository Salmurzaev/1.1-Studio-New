const router = require('express').Router()
const { Content, Season, Serial } = require('../db/models')


router.route('/')
    .get(async (req, res) => {
        const allContent = await Content.findAll()
        res.json(allContent)
    })
    .post(async (req, res) => {
        const content = await Content.create({ ...req.body })
        res.json(content)
    })
    .patch(async (req, res) => {
        const newDataContent = await Content.update({ season_id: req.body.season_id, serial_id: req.body.serial_id }, {
            where: {
                id: req.body.id
            }
        })
        res.json(newDataContent)
    })

router.route('/:id')
    .get(async (req, res) => {
        const content = await Content.findOne({ where: { id: req.params.id } })
        res.json(content)
    })
    .delete(async (req, res) => {
        await Content.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    })


module.exports = router
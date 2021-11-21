const router = require('express').Router()
const { Content } = require('../db/models')


router.route('/')
    .get(async (req, res) => {
        const allContent = await Content.findAll()
        res.json(allContent)
    })
    .post(async (req, res) => {
        const content = await Content.create({... req.body})
        console.log("=======", content);
        res.json(content)
    })

router.route('/:id')
    .get(async (req, res) => {
        const content = await Content.findOne({ where: { id: req.params.id } })
        res.json(content)
    })

module.exports = router
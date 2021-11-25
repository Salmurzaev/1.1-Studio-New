const router = require('express').Router()
const { Content, Season, Serial } = require('../db/models')

router.route('/:id')
    .post(async (req, res) => {
        const id = req.params.id
        const content = await Season.create({ ...req.body, serial_id: id })

        res.json(content)
    })
router
    .route('/:serial_id/:season_id')

    .post(async (req, res) => {
        const content = await Content.create({ ...req.body })
        res.json(content)
    })

module.exports = router

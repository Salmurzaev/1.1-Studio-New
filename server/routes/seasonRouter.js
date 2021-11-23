const router = require('express').Router()
const { Content, Season } = require('../db/models')


router.route('/:id')
    .get(async (req, res) => {
        const season = await Content.findAll({ where: { id: req.params.id } })
        res.json(season)
    })
    .delete(async (req, res) => {
        await Season.destroy({ where: { id: req.params.id}})
        res.sendStatus(200)
    })
    
module.exports = router
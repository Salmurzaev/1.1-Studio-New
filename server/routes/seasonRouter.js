const router = require('express').Router()
const { Content, Season } = require('../db/models')
const  adminCheck  = require('../middleware/adminCheck')


router.route('/:id')
    .get(async (req, res) => {
        const season = await Content.findAll({ where: { id: req.params.id } })
        res.json(season)
    })
    .delete(adminCheck, async (req, res) => {
        await Season.destroy({ where: { id: req.params.id}})
        res.sendStatus(200)
    })
    
module.exports = router
const router = require('express').Router()
const { Content, Season } = require('../db/models')
const  adminCheck  = require('../middleware/adminCheck')


router.route('/:id')
    .get(async (req, res) => {
        try {
            const season = await Content.findAll({ where: { id: req.params.id } })
            res.json(season)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .delete(adminCheck, async (req, res) => {
        try {
            await Season.destroy({ where: { id: req.params.id}})
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
    
module.exports = router
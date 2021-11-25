const router = require('express').Router()
const { Content, Serial } = require('../db/models')
const { Op } = require('sequelize')
router.route('/').post(async (req, res) => {
    const search = await req.body.word
    console.log(search)
    if (search.path === '/films') {
        const word = await Content.findAll({
            where: { title: { [Op.iLike]: `%${search.input}%` }, season_id: null, serial_id: null},
        })
        
    
        res.json({ word })
    }
    else {
        const word = await Serial.findAll({
            where: { title: { [Op.iLike]: `%${search.input}%` } },
        })
    
        
        res.json({ word })
    }
})

module.exports = router

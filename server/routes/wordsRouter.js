const router = require('express').Router()
const { Content } = require('../db/models')
const { Op } = require('sequelize')
router.route('/').post(async (req, res) => {

    const search = await req.body.word
    
    const word = await Content.findAll({
        where: { title: { [Op.iLike]: `%${search}%` } },
    })

    res.json({ word })

})

module.exports = router

const router = require('express').Router()
const { Serial, Film } = require('../db/models')
const { Op } = require('sequelize')
router.route('/').post(async (req, res) => {

    const search = req.body.word

    const word = await Film.findAll({
        where: { title: { [Op.iLike]: `%${search}%` } },
    })

    res.json({ word })

})

module.exports = router

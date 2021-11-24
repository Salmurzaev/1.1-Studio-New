const router = require('express').Router()
const { Content, Season } = require('../db/models')
const adminCheck = require('../middleware/adminCheck')
const { rm } = require('fs/promises');


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
            const season = await Season.findOne({ where: { id: req.params.id } })
            const { dataValues } = season
            const regEx = /http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)\//mg
            const pathImg = dataValues.path_img.split(regEx)
            const imgFileName = pathImg.pop()
            const path = './public/uploads/'
            try {
                await rm(path + imgFileName)
                await Season.destroy({ where: { id: req.params.id } })
                console.log("Img file successfully deleted")
            } catch (error) {
                console.log(error)
            }
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })

module.exports = router
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
            const content = await Content.findAll({ where: { season_id: req.params.id } })
            content.forEach(async (element) => {
                try {
                    const { dataValues } = element
                    const pathImg = dataValues.path_img
                    const pathVideo = dataValues.path_video
                    await rm(pathVideo)
                    await rm(pathImg)
                    await Content.destroy({ where: { id: dataValues.id } })
                    
                    } catch (error) {
                    console.log(error)
                }
            })
            const deletedSeason = await Season.findOne({where: { id: req.params.id}})
            const { dataValues } = deletedSeason
            const pathImg = dataValues.path_img
            try {
                await rm(pathImg)
                await Season.destroy({where : {id: req.params.id}})
                console.log("Season successfully deleted")
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
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
            const regEx = /http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)\//mg
            const path = './public/uploads/'
            const content = await Content.findAll({ where: { season_id: req.params.id } })
            content.forEach(async (element) => {
                try {
                    const { dataValues } = element
                    const pathImg = dataValues.path_img.split(regEx)
                    const pathVideo = dataValues.path_video.split(regEx)
                    const videoFileName = pathVideo.pop()
                    const imgFileName = pathImg.pop()
                    await rm(path + videoFileName)
                    await rm(path + imgFileName)
                    await Content.destroy({ where: { id: dataValues.id } })
                    
                    } catch (error) {
                    console.log(error)
                }
            })
            const deletedSeason = await Season.findOne({where: { id: req.params.id}})
            const { dataValues } = deletedSeason
            const pathImg = dataValues.path_img.split(regEx)
            const imgFileName = pathImg.pop()
            try {
                await rm(path + imgFileName)
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
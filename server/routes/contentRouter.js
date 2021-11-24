const router = require('express').Router()
const { Content, Season, Serial, Rating } = require('../db/models')
const userCheck = require('../middleware/userCheck')
const adminCheck = require('../middleware/adminCheck')
const { rm } = require('fs/promises');

router.route('/')
    .get(async (req, res) => {
        try {
            const allContent = await Content.findAll()
            res.json(allContent)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck, async (req, res) => {
        try {
            const content = await Content.create({ ...req.body })
            res.json(content)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
    .patch(adminCheck, async (req, res) => {
        try {
            const newDataContent = await Content.update({ season_id: req.body.season_id, serial_id: req.body.serial_id }, {
                where: {
                    id: req.body.id
                }
            })
            res.json(newDataContent)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })


router.route('/:id')
    .get(async (req, res) => {
        const rating = await Rating.findAll({
            where: { content_id: req.params.id },
        })
        const sumRating = rating.reduce((acc, item) => {
            return acc + item.rating
        }, 0)
        const data = await Content.findOne({ where: { id: req.params.id } })
        const { dataValues } = data
        const currentRating = sumRating / rating.length
        res.json({ ...dataValues, currentRating })
    })
    .post(userCheck, async (req, res) => {
        await Rating.create({
            content_id: req.params.id,
            user_id: req.session.user.id,
            rating: req.body.rating,
        })
        res.sendStatus(200)
    })
    .delete(adminCheck, async (req, res) => {
        const content = await Content.findOne({ where: { id: req.params.id } })
        const { dataValues } = content
        const regEx = /http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)\//mg
        const pathVideo = dataValues.path_video.split(regEx)
        const pathImg = dataValues.path_img.split(regEx)
        const videoFileName = pathVideo.pop()
        const imgFileName = pathImg.pop()
        const path = './public/uploads/'

        try {
            await rm(path + videoFileName)
            await rm(path + imgFileName)
            await Content.destroy({ where : {id : req.params.id}})
            console.log("Content successfully deleted")
        } catch (error) {
            console.log(error)
        }
        res.sendStatus(200)
    })

router.route('/:id/rating')
    .post(userCheck, async (req, res) => {
        try {
            await Rating.create({
                content_id: req.params.id,
                user_id: req.session.user.id,
                rating: req.body.rating,
            })
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })

module.exports = router

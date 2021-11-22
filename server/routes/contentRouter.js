const router = require('express').Router()
const { Content, Season, Serial, Rating } = require('../db/models')


router.route('/')
    .get(async (req, res) => {
        const allContent = await Content.findAll()
        res.json(allContent)
    })
    .post(async (req, res) => {
        const content = await Content.create({ ...req.body })
        res.json(content)
    })
    .patch(async (req, res) => {
        const newDataContent = await Content.update({ season_id: req.body.season_id, serial_id: req.body.serial_id }, {
            where: {
                id: req.body.id
            }
        })
        res.json(newDataContent)
    })

router.route('/:id')
    .get(async (req, res) => {
        const content = await Content.findOne({ where: { id: req.params.id } })
        res.json(content)
    })
    .delete(async (req, res) => {
        await Content.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    })

router.route('/:id/rating')
    .get(async (req, res) => {
        const rating = await Rating.findAll({ where: { content_id: req.params.id } })
        const sumRating = rating.reduce((acc, item) => {
            return acc + item.rating
        }, 0)
        const currentRating = sumRating / rating.length
        res.json(currentRating)
    })
    .post(async (req, res) => {
        await Rating.create({ content_id: req.params.id, user_id: req.session.user.id, rating: req.body.rating })
        res.sendStatus(200)
    })


module.exports = router
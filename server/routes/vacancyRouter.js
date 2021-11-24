const router = require('express').Router()
const { Vacancy } = require('../db/models')
const adminCheck = require('../middleware/adminCheck')

router.route('/')
    .get(async (req, res) => {
        try {
            const vacancies = await Vacancy.findAll()
            res.json(vacancies)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck, async (req, res) => {
        try {
            const newVacancy = await Vacancy.create({ ...req.body })
            res.json(newVacancy)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })
router.route('/:id')
    .get(async (req, res) => {
        try {
            const vacancy = await Vacancy.findOne({ where: { id: req.params.id } })
            res.json(vacancy)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .delete(adminCheck, async (req, res) => {
        try {
            await Vacancy.destroy({ where: { id: req.params.id } })
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })

module.exports = router
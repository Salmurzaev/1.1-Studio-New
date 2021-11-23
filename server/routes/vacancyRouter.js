const router = require('express').Router()
const { Vacancy } = require('../db/models')

router.route('/')
    .get(async (req, res) => {
        const vacancies = await Vacancy.findAll()
        res.json(vacancies)
    })
    .post(async (req, res) => {
        const newVacancy = await Vacancy.create({ ...req.body })
        res.json(newVacancy)
    })
router.route('/:id')
    .get(async (req, res) => {
        const vacancy = await Vacancy.findOne({ where: { id: req.params.id } })
        res.json(vacancy)
    })
    .delete(async (req, res) => {
        await Vacancy.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    })

module.exports = router
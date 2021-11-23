const router = require('express').Router()
const { Project } = require('../db/models')

router.route('/')
    .get(async (req, res) => {
        const projects = await Project.findAll()
        res.json(projects)
    })
    .post(async (req, res) => {
        const newProject = await Project.create({ ...req.body })
        res.json(newProject)
    })
router.route('/:id')
    .get(async (req, res) => {
        const project = await Project.findOne({ where: { id: req.params.id } })
        res.json(project)
    })
    .delete(async (req, res) => {
        await Project.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    })


module.exports = router
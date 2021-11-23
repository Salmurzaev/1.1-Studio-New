const router = require('express').Router()
const { Project } = require('../db/models')
const  adminCheck  = require('../middleware/adminCheck')

router.route('/')
    .get(async (req, res) => {
        try {
            const projects = await Project.findAll()
            res.json(projects)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .post(adminCheck, async (req, res) => {
        try {
            const newProject = await Project.create({ ...req.body })
            res.json(newProject)
        } catch (error) {
            res.sendStatus(401)
        }
    })
router.route('/:id')
    .get(async (req, res) => {
        try {
            const project = await Project.findOne({ where: { id: req.params.id } })
            res.json(project)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })
    .delete(adminCheck, async (req, res) => {
        try {
            await Project.destroy({ where: { id: req.params.id } })
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })


module.exports = router
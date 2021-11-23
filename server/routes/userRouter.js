require('dotenv').config()
const router = require('express').Router()
const bcrypt = require('bcrypt');
const  userCheck  = require('../middleware/userCheck')
const { User } = require('../db/models');
const authCheck = require('../middleware/authCheck');

router.route('/signup')
    .post(authCheck, async (req, res) => {
        const { email, password } = req.body;

        if (email && password) {
            const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
            try {
                const currentUser = await User.create({ ...req.body, password: cryptPass })
                req.session.user = { id: currentUser.id, name: currentUser.name }
                return res.json({
                    user: {
                        name: currentUser.name,
                        id: currentUser.id,
                    },
                })
            } catch (err) {
                console.log(err)
                return res.sendStatus(500)
            }
        } else {
            return res.sendStatus(403)
        }
    })

router.route( '/signin')
    .post(authCheck, async (req, res) => {
        const { email, password } = req.body;
        if (email && password) {
            try {
                const currentUser = await User.findOne({ where: { email } })
                console.log(currentUser)
                if (currentUser && await bcrypt.compare(password, currentUser.password)) {
                    req.session.user = { id: currentUser.id, name: currentUser.name }
                    return res.status(200).json({
                        user: {
                            name: currentUser.name,
                            id: currentUser.id,
                        },
                    })
                } else {
                    return res.sendStatus(403).json()
                }
            } catch (err) {
                console.log(err)
                return res.sendStatus(500)
            }
        } else {
            return res.sendStatus(403)
        }
    })

router.route('/signout')
    .get(userCheck, (req, res) => {
        try {
            req.session.destroy()
            res.clearCookie('sid').sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    })

module.exports = router
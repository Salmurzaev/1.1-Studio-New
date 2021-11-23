require('dotenv').config()
const router = require('express').Router()
const bcrypt = require('bcrypt');
const  userCheck  = require('../middleware/userCheck')
const { User } = require('../db/models');
const authCheck = require('../middleware/authCheck');



router.route('/signup').post(async (req, res) => {
    const { name, password, email } = req.body.registerInput
    if (email && name && password) {
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
        try {
            const currentUser = await User.create({
                ...req.body.registerInput,
                password: cryptPass,
            })

            req.session.user = {
                id: currentUser.id,
                name: currentUser.name,
            }
            
            res.json({
                user: {
                    name: currentUser.name,
                    id: currentUser.id,
                },
            })
        } catch (err) {
            console.log(err)
        }
    }
})


router.route( '/signin')
    .post(authCheck, async (req, res) => {
        const { email, password } = req.body.loginInput;;
        if (email && password) {
            try {
                const currentUser = await User.findOne({ where: { email } })
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
        req.session.destroy()
        res.clearCookie('sid').sendStatus(200)
    })

module.exports = router
    

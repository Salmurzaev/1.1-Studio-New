const adminCheck = (req, res, next) => {
    console.log(req.session.user)
    if (req.session.user.isAdmin) {
        next()
    } else {
        res.sendStatus(401)
    }
}

module.exports =  adminCheck 
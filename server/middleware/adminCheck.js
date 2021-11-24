const adminCheck = (req, res, next) => {
    if (req.session.user.name === "admin") {
        next()
    } else {
        res.sendStatus(401)
    }
}

module.exports =  adminCheck 
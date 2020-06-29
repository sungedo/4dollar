const User = require('../models/user')

exports.signup = (req, res) => {
    console.log('req.body from user.ls controllers', req.body)
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        })
    })

};
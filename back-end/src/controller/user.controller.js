const express = require('express')
const { createUser, findUser } = require('../services/user.service')
const router = express.Router()
const jwt = require("jsonwebtoken") 


router.post('/register', async (req, res) => {
    try {
        const newUser = req.body

        const user = await createUser(newUser)

        return res.status(201).send({
            user,
            message: ("Register Success")
        })
    } catch (error) {
        return res.status(500).send(error)
    }
})


router.post('/login', async (req, res)  => {
    try {
        const JWTSECRETKEY = "bagasngidiw"

        const userLogin = req.body

        const user = await findUser(userLogin)

        const token = jwt.sign({userLogin}, JWTSECRETKEY , {expiresIn: '4h'})
        
        console.log('user ccontr', user);

        return res.status(200).send({
            user,
            token,
            message: ('Login Success')
        })

    } catch (error) {
        return res.status(500).send(error);
    }
})


module.exports = router
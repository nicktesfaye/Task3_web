const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
const data =require('../model/data')

router.get('/',async(req,res) => {

    try{
        const users = await data.find()
        res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',jsonParser,async(req,res) => {

        console.log(req.body)
    const user = new data({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err)
    {
        res.send('error')
    }
})

module.exports =router

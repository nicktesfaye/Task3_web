const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
const poll =require('../model/poll')
const data = require('../model/data')

router.get('/',async(req,res) => {

    //var temp = await data.findById("610eaf609b9b62070ccc4c22")
    //temp.remove()

    try{
        const users = await poll.find()
        res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',jsonParser,async(req,res) => {

    const user = new poll({
        adminName: req.session.userName,
        adminEmail: req.session.userEmail,
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4
    })

    try{
        await user.save()
        res.redirect('/')
    }catch(err)
    {
        res.send('error')
    }
})

module.exports =router
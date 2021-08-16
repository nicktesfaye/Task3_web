const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
const poll =require('../model/poll')
const data = require('../model/data')

router.get('/',async(req,res) => {

    //var temp = await poll.findById("610f8c775fa1613f180bde27")
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

    var temp = await data.findOne({email:req.session.userEmail})

    const user = new poll({
        adminName: req.session.userName,
        adminEmail: req.session.userEmail,
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        team: temp.team
    })

    try{
        var a1 = await poll.findOne({team:user.team})
        if(a1== null)
       { await user.save()
        res.redirect('/')}
        else{
            res.redirect('/createPoll')
        }
    }catch(err)
    {
        res.send('error')
    }
})

module.exports =router
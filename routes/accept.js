const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
var data=require('../model/data')
var invite =require('../model/invite')

router.get('/',async(req,res) => {
    if(req.session.LogIn==true)
    res.redirect('/joinTeam')
    else
    res.redirect('/login')
})

router.post('/',jsonParser,async(req,res) => {
    if(req.session.LogIn==true)
    {
        var a1 = await data.findOne({email:req.session.userEmail})
        var a2 = await invite.findOne({to:req.session.userEmail})
        var a3 = await data.findOne({email: a2.from})
        a1.team = a3.team
        a1.vote=true
        a1.save()
        a2.remove()
        res.redirect('/joinTeam')

}
    else
    res.redirect('/login')
    
})

module.exports =router
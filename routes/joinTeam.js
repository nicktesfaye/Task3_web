const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
var invite =require('../model/invite')
var data =require('../model/data')
var invite = require('../model/invite')

router.get('/',async(req,res) => {

    var a1 = invite.findOne({to:req.session.userEmail})
    var a2 = data.findOne({email:a1.from})
    if(req.session.LogIn==true){
        var a1 = await invite.findOne({to:req.session.userEmail})
        if(a1 == null)
        res.render('../views/noinvites.ejs')
        else
        res.render('../views/joinTeam.ejs',{name :a2.team})

    }
    else
    res.redirect('/login')
})

router.post('/',jsonParser,async(req,res) => {
   
    var a1 = invite.findOne({to:req.session.userEmail})
    var a2 = data.findOne({email:a1.from})
    if(req.session.LogIn==true){
        var a1 = await invite.findOne({to:req.session.userEmail})
        if(a1 == null)
        res.render('../views/noinvites.ejs')
        else
        res.render('../views/joinTeam.ejs',{name :a2.team})

    }
    else
    res.redirect('/login')
    
})

module.exports =router

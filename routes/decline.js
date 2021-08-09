const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
var data=require('../model/data')
var invite =require('../model/invite')
const { remove } = require('../model/data')

router.get('/',async(req,res) => {
    if(req.session.LogIn==true)
    res.redirect('/joinTeam')
    else
    res.redirect('/login')
})

router.post('/',jsonParser,async(req,res) => {
    if(req.session.LogIn==true)
    {
        var a2 = await invite.findOne({to:req.session.userEmail})
        a2.remove()
        res.redirect('/joinTeam')

}
    else
    res.redirect('/login')
    
})

module.exports =router
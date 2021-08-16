const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
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
        var a2 = await invite.findOne({to:req.session.userEmail})
        a2.remove()
        res.redirect('/joinTeam')

}
    else
    res.redirect('/login')
    
})

module.exports =router
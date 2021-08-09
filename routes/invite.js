const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()

router.get('/',async(req,res) => {
    if(req.session.LogIn==true)
    res.render('../views/invite.ejs')
    else
    res.redirect('/login')
})

router.post('/',jsonParser,async(req,res) => {
    if(req.session.LogIn==true)
    res.render('../views/invite.ejs')
    else
    res.redirect('/login')
    
})

module.exports =router
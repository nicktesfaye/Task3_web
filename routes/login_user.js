const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
const data =require('../model/data')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt')


router.get('/',async(req,res) => {

    res.redirect('/login')
})

router.post('/',jsonParser,async(req,res) => {

    try{

        const a1= await data.findOne({email: req.body.email})
        if(await bcrypt.compare(req.body.password,a1.password))
        {   req.session.LogIn = true
            res.redirect('/')}
        else
        {console.log("incorrect password")
        res.redirect('/login')}
    }catch(err)
    {
        res.send('error')
    }
})

module.exports =router

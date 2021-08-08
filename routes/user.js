const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
const data =require('../model/data')
const bcrypt = require('bcrypt')

router.get('/',async(req,res) => {

    //var temp = await data.findById("610eaf609b9b62070ccc4c22")
    //temp.remove()

    try{
        const users = await data.find()
        res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',jsonParser,async(req,res) => {

    const hashedPassword = await bcrypt.hash(req.body.password,10)

    const user = new data({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    try{
        const a1= await data.findOne({email: user.email})
        const a2= await data.findOne({email: user.password})
        a2=await data.findOne({email: user.name})
        if(a1==null)
        {await user.save()
        res.redirect('/login')}
        else
        res.redirect('/register')
    }catch(err)
    {
        res.send('error')
    }
})

module.exports =router
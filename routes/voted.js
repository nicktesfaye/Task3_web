const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
const data =require('../model/data')
const poll = require('../model/poll')

router.get('/',async(req,res) => {

    try{
        res.redirect('/')
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',jsonParser,async(req,res) => {
    
    var a1= await data.findOne({email:req.session.userEmail})
    var a2 = await poll.findOne({team:a1.team})
    
    if(req.body.Option ==="1")
    {a1.vote =false
    a1.save()
    a2.votes1++
    a2.save()
    res.redirect('/')}

    else if(req.body.Option ==="2")
    {
    a1.vote =false
    a1.save()
    a2.votes2++
    a2.save()
    res.redirect('/')}

    else if(req.body.Option ==="3")
    {
    a1.vote =false
    a1.save()
    a2.votes3++
    a2.save()
    res.redirect('/')}

    else if(req.body.Option ==="4")
    {
    a1.vote =false
    a1.save()
    a2.votes4++
    a2.save()
    res.redirect('/')}
    
    else
    res.render("selectOption.ejs")


})

module.exports =router
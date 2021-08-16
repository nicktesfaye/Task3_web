const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
const data =require('../model/data')
const poll =require('../model/poll')

router.get('/',async(req,res) => {
    if(req.session.LogIn==true)
    res.redirect('/')
    else
    res.redirect('/login')
})

router.post('/',jsonParser,async(req,res) => {
    if(req.session.LogIn==true){
        try{
            const a1= await data.findOne({email: req.session.userEmail})
            var a2 = await poll.findOne({team:a1.team})
            if(a2!=null)
             res.render('../views/pollResult.ejs',{question:a2.question , option1:a2.option1 , option2:a2.option2 , option3:a2.option3 , option4:a2.option4,
            votes1:a2.votes1, votes2:a2.votes2, votes3:a2.votes3, votes4:a2.votes4 })

            else
            res.render('../views/nopoll.ejs')
        }catch(err)
        {
            res.send('error')
        }
    }
    else
    res.redirect('/')
    
})

module.exports =router
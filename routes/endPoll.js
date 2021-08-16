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
            {   
                if(a2.adminEmail === a1.email)
                {await data.updateMany({team:a1.team},{$set:{vote:true}})
                a2.remove()
                res.redirect('/')}

                else
                res.send("only Admin can end the poll")
            }

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
const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
var invite = require('../model/invite')

router.get('/',async(req,res) => {

    //var temp = await data.findById("610eaf609b9b62070ccc4c22")
    //temp.remove()

    try{
        const users = await invite.find()
        res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',jsonParser,async(req,res) => {

    const user = new invite({
        to: req.body.email,
        from:req.session.userEmail
    })
    

    try{
        const a1= await invite.findOne({to: user.to,from:user.from})
        if(a1==null)
        {
        if(user.to != user.from)
        {await user.save()
        res.redirect('/')}
        else
        res.redirect('/invite')}

        else{
            res.redirect('/invite')
        }

    }catch(err)
    {
        res.redirect('/')
    }
})

module.exports =router
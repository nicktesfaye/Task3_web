
const express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var jsonParser = bodyParser.json()
var team = require('../model/teams')
var data = require('../model/data')

router.get('/',async(req,res) => {

    //var temp = await team.findById("610f803ba7d8910d60b84445")
    //temp.remove()

    try{
        const users = await team.find()
        res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',jsonParser,async(req,res) => {

    const user = new team({
        team:req.body.team,
        adminName: req.session.userName,
        adminEmail: req.session.userEmail
    })
    

    try{
        const a1= await team.findOne({team: user.team})
        if(a1==null)
        {
        const temp = await data.findOne({email: user.adminEmail})
        if(temp.team == "none")
        {await user.save()
        temp.team = user.team
        temp.save()}

        else{
            res.redirect('/createTeam')
        }
        
        res.redirect('/')}
        else
        res.redirect('/createTeam')
    }catch(err)
    {
        res.send('error')
    }
})


module.exports =router

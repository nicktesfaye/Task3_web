const express = require('express')
const router = express.Router()

const data =require('../model/data')

router.get('/',async(req,res) => {

    try{
        const users = await data.find()
        res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
    }
})

router.post('/',async(req,res) => {

    console.log(req)
 
    const user = new data({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err)
    {
        res.send('error')
    }
})

module.exports =router
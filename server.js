const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/deltaTask3'

const users=[]

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
con.on('open',() =>{
    console.log("connected...")
})

const user =require('./routes/user')
app.use('/users',user)

app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
res.render('index.ejs')
})

app.get('/login',(req,res)=>{
res.render('login.ejs')
})

app.get('/register',(req,res)=>{
res.render('register.ejs')
})

app.post('/register', async (req,res)=>{

    console.log(req.body)

try{
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    res.redirect('/login')
} catch{
    res.redirect('/register')
}

console.log(users)
})

app.listen(3000, ()=>{
    console.log('server started')
})
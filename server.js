
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const url = 'mongodb://localhost/deltaTask3'

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
con.on('open',() =>{
    console.log("connected...")
})

const user =require('./routes/user')
const login_user = require('./routes/login_user')
const createTeam = require('./routes/createTeam')
const newTeam = require('./routes/newTeam')
const joinTeam = require('./routes/joinTeam')
const createPoll = require('./routes/createPoll')
const newPoll = require('./routes/newPoll')


app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret:'secret_key',
    resave:false,
    saveUninitialized:false,
    LogIn:false
}))
app.use(express.static('./views'))



app.get('/',(req,res)=>{
    if(req.session.LogIn)
    res.render('index.ejs')
    else
    res.redirect('/login')
})

app.post('/',(req,res)=>{
    if(req.session.LogIn)
    req.session.LogIn = false

    res.redirect('/login')
})

app.get('/login',(req,res)=>{
    req.session.LogIn=false
res.render('login.ejs')
})

app.get('/register',(req,res)=>{
res.render('register.ejs')
})


app.use('/users',user)
app.use('/logData',login_user)
app.use('/createTeam',createTeam)
app.use('/newTeam',newTeam)
app.use('/joinTeam',joinTeam)
app.use('/createPoll',createPoll)
app.use('/newPoll',newPoll)

app.listen(3000, ()=>{
    console.log('server started')
})

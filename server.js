//setup
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const url = 'mongodb://localhost/deltaTask3'

//connect to mongodb
mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
con.on('open',() =>{
    console.log("connected...")
})

//setup path variables
const user =require('./routes/user')
const login_user = require('./routes/login_user')
const createTeam = require('./routes/createTeam')
const newTeam = require('./routes/newTeam')
const joinTeam = require('./routes/joinTeam')
const createPoll = require('./routes/createPoll')
const newPoll = require('./routes/newPoll')
const invite = require('./routes/invite')
const invited = require('./routes/invited')
const accept = require('./routes/accept')
const decline = require('./routes/decline')
const vote = require('./routes/vote')
const voted = require('./routes/voted')
const pollResult = require('./routes/pollResult')
const endPoll = require('./routes/endPoll')

//other
const data = require('./model/data')

//set up 
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


//home page
app.get('/',async(req,res)=>{
    
    if(req.session.LogIn)
    {var a1 = await data.findOne({email:req.session.userEmail})
    res.render('index.ejs',{team:a1.team})}
    else
    res.redirect('/login')
})

app.post('/',(req,res)=>{
    if(req.session.LogIn)
    req.session.LogIn = false

    res.redirect('/login')
})


//login page
app.get('/login',(req,res)=>{
    if(req.session.LogIn)
    res.redirect('/')
    else
    res.render('login.ejs')
})

//register page
app.get('/register',(req,res)=>{
res.render('register.ejs')
})



//set up routes
app.use('/users',user)
app.use('/logData',login_user)
app.use('/createTeam',createTeam)
app.use('/newTeam',newTeam)
app.use('/joinTeam',joinTeam)
app.use('/createPoll',createPoll)
app.use('/newPoll',newPoll)
app.use('/invite',invite)
app.use('/invited',invited)
app.use('/accept',accept)
app.use('/decline',decline)
app.use('/vote',vote)
app.use('/voted',voted)
app.use('/result',pollResult)
app.use('/endPoll',endPoll)

//server port
app.listen(3000, ()=>{
    console.log('server started')
})

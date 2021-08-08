const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    adminName:{
        type:String,
        required:true
    },

    adminEmail: {
        type:String,
        required:true
    },

    question: {
        type: String,
        required:true
    },

    option1: {
        type: String,
        required: true
    },

    option2 :{
        type: String,
        required: true
    },

    option3 :{
        type: String,
        required: true
    },

    option4 :{
        type: String,
        required: true
    }


})

module.exports =mongoose.model('poll',schema)
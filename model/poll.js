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

    team:{
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
    },

    votes1:{
        type:Number,
        require:true,
        default:0
    },

    votes2:{
        type:Number,
        require:true,
        default:0
    },

    votes3:{
        type:Number,
        require:true,
        default:0
    },

    votes4:{
        type:Number,
        require:true,
        default:0
    },

})

module.exports =mongoose.model('poll',schema)
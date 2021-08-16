const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    name: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    team:{
        type:String,
        required:true,
        default:"none"
    },

    vote:{
        type:Boolean,
        required:true,
        default:false
    }

})

module.exports =mongoose.model('data',schema)
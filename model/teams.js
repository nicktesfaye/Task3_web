const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    team:{
        type:String,
        required:true
    },

    adminName:{
        type:String,
        required:true,
        default:"none"
    },

    adminEmail: {
        type:String,
        required:true,
        default:"none"
    }
    

})

module.exports =mongoose.model('teams',schema)
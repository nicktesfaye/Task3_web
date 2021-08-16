const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    to:{
        type:String,
        required:true
    },

    from:{
        type:String,
        required:true,
    }

})

module.exports =mongoose.model('invite',schema)
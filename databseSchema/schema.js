const mongoose = require('mongoose')
const schema = mongoose.Schema

const match = new schema({
    match:{
        type:String,
        required:true
    }
}) 

module.exports = mongoose.model('match',match)
 
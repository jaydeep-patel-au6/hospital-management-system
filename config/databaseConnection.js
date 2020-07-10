const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/Hospital-Management-System', { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if (!err) { console.log('mongodbconnection sucessful')}
    else { console,log('Error in DB connection: ' + err) }
})

module.exports = connection

//models connection
require('../models/patient/patientRegistrationModel')
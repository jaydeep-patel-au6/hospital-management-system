const mongoose = require('mongoose')
var AutoIncrement = require('mongoose-sequence')(mongoose);

var patientRegistrationSchema = new mongoose.Schema({
    order: {
        type: Number
      },
    patientName:{
        type: String
        
    },
    age:{
        type: Number
        
    },
    gender:{
        type: String
       
        
    },
    bloodGroup:{
        type:String
    },
    contactNumber:{
        type: Number
    },
    address:{
        type: String
    },
    refferedDoctor:{
        type: String
    },
    emergencyPersonName:{
        type: String
    },
    emergencyPationtRelation:{
        type: String
    },
    emergencyContactNumber:{
        type: Number
    },
    createdAt: { type: Date, default: Date.now }
    
})

patientRegistrationSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});

var pationtRegistration = mongoose.model('Patient_Registration', patientRegistrationSchema)

module.exports = pationtRegistration


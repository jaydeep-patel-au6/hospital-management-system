const mongoose = require('mongoose')

var adminDDSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: 'Department Name is required'
    },
    doctorName: {
        type: String,
        required: 'Doctore name is required'
    },
    time : { type: Date, default: Date.now } 
})

mongoose.model('AdminDepartmentDeclaration', adminDDSchema)
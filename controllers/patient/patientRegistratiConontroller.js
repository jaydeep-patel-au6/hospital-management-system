const mongoose = require('mongoose')
const Patient = mongoose.model('Patient_Registration')

class patientRegistration {

    //display form
    getForm(req, res){
       res.render('patient/patientRegistration', {
           viewTitle: 'Patient Registration'
       })
    }

    //insert data to database
    postForm(req, res){
        //console.log(req.body)
        var patient = new Patient()
        patient.patientName = req.body.patientName
        patient.age = req.body.age
        patient.gender = req.body.gender
        patient.bloodGroup = req.body.bloodGroup
        patient.contactNumber = req.body.contactNumber
        patient.address = req.body.address
        patient.refferedDoctor = req.body.refferedDoctor
        patient.emergencyPersonName = req.body.emergencyPersonName
        patient.emergencyPationtRelation = req.body.emergencyPationtRelation
        patient.emergencyContactNumber = req.body.emergencyContactNumber
     
        patient.save((err, docs)=>{
            if(!err){
                res.redirect('/patientRegistration/patientList')
            }

            else{
                res.render('patient/patientRegistration', {
                    viewTitleErr: 'Data not insert Proparly try again'
                })
            }
        })
        
    }

    //get all data
    getAllData(req, res){
        Patient.find((err, docs)=>{
            if(!err){
                res.render('patient/patientRegistrationData',{
                    list: docs,
                    viewTitle: 'Patient List'
                })
            }
        })
    }



}

module.exports = patientRegistration
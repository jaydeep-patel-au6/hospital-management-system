const mongoose = require('mongoose')
const Patient = mongoose.model('Patient_Registration')

class patientRegistration {

    //display form
    getForm(req, res) {
        res.render('patient/patientRegistration', {
            viewTitle: 'Patient Registration'
        })
    }

    //insert data to database
    postForm(req, res) {

        if (req.body._id == '')
            insertRecord(req, res);
        else
            updateRecord(req, res);


    }

    //get all data
    getAllData(req, res) {
        Patient.find((err, docs) => {
            if (!err) {
                res.render('patient/patientRegistrationData', {
                    list: docs,
                    viewTitle: 'Patient List'
                })
            }
        })
    }

      //get id
      getID(req, res){
        Patient.findById(req.params.id, (err, doc)=>{
            if(!err){
                res.render('patient/patientRegistration',{
                    viewTitle : 'Please update record',
                    patient: doc
                })
            }
        })
    }

    //delete Record
    deleteData(req, res){
        Patient.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(!err){
                res.redirect('/patientRegistration/list')
            }
            else{
                console.log('err in admin data declaration delete:' + err)
            }
        })
    }







}


//insert record function
function insertRecord(req, res) {
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

    patient.save((err, docs) => {
        if (!err) {
            res.redirect('/patientRegistration/list')
        } else {
            res.render('patient/patientRegistration', {
                viewTitleErr: 'Data not insert Proparly try again'
            })
        }
    })
}

function updateRecord(req, res){
   Patient.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=>{
        if(!err){
            res.redirect('/patientRegistration/list')
        }
        else{
            console.log('error during record update:' + err)
        }
    })
}

module.exports = patientRegistration
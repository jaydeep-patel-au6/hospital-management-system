
const express = require('express')
const router = express.Router()
const PatientRegistration = require('../../controllers/patient/patientRegistratiConontroller');


const patientRegistration = new PatientRegistration()

router.get('/', patientRegistration.getForm) //form display routes

router.post('/', patientRegistration.postForm) //post data form route

router.get('/list', patientRegistration.getAllData) //get patient registration all data

router.get('/:id', patientRegistration.getID) //get id for update record

router.get('/delete/:id', patientRegistration.deleteData) // delete record

module.exports = router
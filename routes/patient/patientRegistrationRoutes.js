
const express = require('express')
const router = express.Router()
const PatientRegistration = require('../../controllers/patient/patientRegistratiConontroller');


const patientRegistration = new PatientRegistration()

router.get('/', patientRegistration.getForm) //form display routes

router.post('/', patientRegistration.postForm) //post data form route

router.get('/list', patientRegistration.getAllData) //get patient registration all data

module.exports = router
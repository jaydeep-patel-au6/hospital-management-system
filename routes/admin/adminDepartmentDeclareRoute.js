const express = require('express')
const routes = express.Router()
const AdminDD = require('../../controllers/admin/adminDepartmentDeclareController')

const adminDD = new AdminDD()

routes.get('/', adminDD.getForm) // get form for insert department and doctor entry

routes.post('/', adminDD.postForm) // submit form data

routes.get('/list', adminDD.getAllData) // get all submited data



module.exports = routes
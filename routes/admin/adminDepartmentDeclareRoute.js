const express = require('express')
const routes = express.Router()
const AdminDD = require('../../controllers/admin/adminDepartmentDeclareController')

const adminDD = new AdminDD()

routes.get('/', adminDD.getForm) // get form for insert department and doctor entry

routes.post('/', adminDD.postForm) // submit form data

routes.get('/list', adminDD.getAllData) // get all submited data

routes.get('/:id', adminDD.getID) //get id for update record

routes.get('/delete/:id', adminDD.deleteData) // delete record



module.exports = routes
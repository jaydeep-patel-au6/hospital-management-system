//delare packages
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const PORT = process.env.PORT || 3000;

require('./config/databaseConnection')

//routes declaration
const patientRegistration = require('./routes/patient/patientRegistrationRoutes')
const adminDepartmentDeclare = require('./routes/admin/adminDepartmentDeclareRoute')


//create app middleware
const app = express()

//VIEW ENGINE
app.set("view engine", "hbs");
app.set("views", "views");

//for css and other files
app.use(express.static(__dirname + "/public"));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connection routes to server
app.use('/patientRegistration', patientRegistration)
app.use('/adminDepartmentDeclare', adminDepartmentDeclare)



//declare server
app.listen(PORT, ()=>{
    console.log(`server works on port ${PORT}`)
})
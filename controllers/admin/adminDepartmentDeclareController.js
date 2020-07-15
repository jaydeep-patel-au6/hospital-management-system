const mongoose = require('mongoose')
const AdminDD = mongoose.model('AdminDepartmentDeclaration')

class adminDD {


    // get form
    getForm(req, res){
        res.render('admin/adminDepartmentDeclaration',{
            viewTitle1 : 'Insert Department and Doctor Name'
        })
    }


    // insert form data
    postForm(req, res){

        var adminDD = new AdminDD()

        adminDD.departmentName = req.body.departmentName
        adminDD.doctorName = req.body.doctorName

        adminDD.save((err, docs)=>{
            if(!err){
                res.render('admin/adminDepartmentDeclaration',{
                    viewTitle2 : 'Data Submitted Sucessfully'
                })
            }else   {
                res.render('admin/adminDepartmentDeclaration',{
                    viewTitle3 : 'Data Not Submited Sucessfully'
                })
            }
        })
        
    }


    //get all form data
    getAllData(req, res){
        AdminDD.find((err, docs)=>{
            if(!err){
                res.render('admin/adminDepartmentDeclarationList',{
                    viewTitle4 : 'Department Name with Doctor name',
                    list: docs
                })
            }else   {
               console.log('err in admin department declaration data show' + err)
            }
        }).lean();
    }

    


}

module.exports = adminDD 
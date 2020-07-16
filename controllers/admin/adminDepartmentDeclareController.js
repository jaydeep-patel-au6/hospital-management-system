const mongoose = require('mongoose')
const AdminDD = mongoose.model('AdminDepartmentDeclaration')

class adminDD1 {


    // get form
    getForm(req, res){
        res.render('admin/adminDepartmentDeclaration',{
            viewTitle1 : 'Insert Department and Doctor Name'
        })
    }


    // insert form data
    postForm(req, res){

        if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);

       
        
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

    //get id
    getID(req, res){
        AdminDD.findById(req.params.id, (err, doc)=>{
            if(!err){
                res.render('admin/adminDepartmentDeclaration',{
                    viewTitle : 'Please update record',
                    adminDD: doc
                })
            }
        })
    }

    //delete Record
    deleteData(req, res){
        AdminDD.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(!err){
                res.redirect('/adminDepartmentDeclare/list')
            }
            else{
                console.log('err in admin data declaration delete:' + err)
            }
        })
    }
    


}

//insert data function
function insertRecord(req, res){

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

//update data function
function updateRecord(req, res){

    AdminDD.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=>{
        if(!err){
            res.redirect('/adminDepartmentDeclare/list')
        }
        else{
            console.log('error during record update:' + err)
        }
    })

}








module.exports = adminDD1
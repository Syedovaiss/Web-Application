const Sequelize=require('sequelize');
const db=require('./config/database');
const admin=db.define('categories',{

    a_id:{type:Sequelize.INTEGER},
     a_name:{type:Sequelize.STRING},
    a_password:{type:Sequelize.STRING},
    a_email:{type:Sequelize.STRING},
    a_createddate:{type:Sequelize.DATE}
    

});
module.exports=admin;
const Sequelize=require('sequelize');
const db=require('./config/database');
const customer=db.define('customer',{

    c_id:{type:Sequelize.INTEGER},
    c_firstname:{type:Sequelize.STRING},
    c_lastname:{type:Sequelize.STRING},
    username:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING},
    c_mobile:{type:Sequelize.INTEGER},
    c_email:{type:Sequelize.STRING},
    c_city:{type:Sequelize.STRING},
    c_address:{type:Sequelize.STRING},
    c_postalcode:{type:Sequelize.INTEGER},
    DOB:{type:Sequelize.DATE},
    gender:{type:Sequelize.STRING},
    c_created:{type:Sequelize.DATE},
    c_updated:{type:Sequelize.DATE}

});
module.exports=customer;
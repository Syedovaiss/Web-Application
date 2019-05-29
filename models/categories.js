const Sequelize=require('sequelize');
const db=require('./config/database');
const categories=db.define('categories',{

    category_id:{type:Sequelize.INTEGER},
     name:{type:Sequelize.STRING},
    parent:{type:Sequelize.STRING}
    

});
module.exports=categories;
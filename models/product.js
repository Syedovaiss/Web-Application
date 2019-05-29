const Sequelize=require('sequelize');
const db=require('./config/database');
const product=db.define('product',{

    p_id:{type:Sequelize.INTEGER},
    p_name:{type:Sequelize.STRING},
    p_description:{type:Sequelize.TEXT},
    p_quantity:{type:Sequelize.INTEGER},
    p_price:{type:Sequelize.INTEGER},
    p_image:{type:Sequelize.BLOB},
    p_ranking:{type:Sequelize.INTEGER},
    p_addeddate:{type:Sequelize.DATE},
    

});
module.exports=product;
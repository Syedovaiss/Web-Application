const Sequelize=require('sequelize');
const db=require('./config/database');
const productdetails=db.define('productdetails',{

    pd_id:{type:Sequelize.INTEGER},
    p_id:{type:Sequelize.INTEGER}, 
    pd_size:{type:Sequelize.INTEGER}
    

});
module.exports=productdetails;
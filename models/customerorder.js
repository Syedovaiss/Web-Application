const Sequelize=require('sequelize');
const db=require('./config/database');
const customerorder=db.define('product',{

    o_id:{type:Sequelize.INTEGER},
    p_id:{type:Sequelize.INTEGER},
    c_id:{type:Sequelize.INTEGER},
   o_addeddate:{type:Sequelize.DATE},
   o_deliverydate:{type:Sequelize.DATE},
   o_status:{type:Sequelize.TEXT}
    

});
module.exports=customerorder;
const Sequelize=require('sequelize');
const db=require('./config/database');
const payment=db.define('payment',{

    pay_id:{type:Sequelize.INTEGER},
    c_id:{type:Sequelize.INTEGER},
   
    payment_recieve:{type:Sequelize.STRING}
    

});
module.exports=payment;
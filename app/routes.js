
const SiteConroller = require('./SiteController.js');
module.exports=function(app){
	app.get('/', SiteConroller.index);
	app.get('/contact', SiteConroller.contact);
	app.get('/cart',SiteConroller.cart);

	app.get('/checkout',SiteConroller.checkout);
	app.get('/Jackets',SiteConroller.jackets);
	app.get('/login',SiteConroller.login);
	app.get('/Pant',SiteConroller.pant);
	app.get('/privacy',SiteConroller.privacy);
	app.get('/product',SiteConroller.product);
	app.get('/return',SiteConroller.return);
	app.get('/shipping',SiteConroller.shipping);
	app.get('/Shirt',SiteConroller.shirt);

	app.get('/Term',SiteConroller.term);
	app.get('/Thanks',SiteConroller.thanks);
	app.get('/Watches',SiteConroller.watches);
}
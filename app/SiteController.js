module.exports = {
    index:function(req,res) {
     	 res.render('index', { title: 'Index' });
	  },
	
	contact:function(req,res) {
		res.render('contact', { contactTitle: 'Contact Us' });
	},

	cart:function(req,res) {
		res.render('cart', { title: 'Cart' });
	},
	watches:function(req,res) {
		res.render('Watches', { title: 'Watches' });
	},
	thanks:function(req,res) {
		res.render('Thanks', { title: 'Thanks' });
	},
	term:function(req,res) {
		res.render('Term', { title: 'Terms & Condition' });
	},
	shirt:function(req,res) {
		res.render('Shirt', { title: 'Shirts' });
	},
	shipping:function(req,res) {
		res.render('shipping', { title: 'Shipping Policy' });
	},
	return:function(req,res) {
		res.render('return', { title: 'Return Policy' });
	},
	product:function(req,res) {
		res.render('product', { title: 'Products' });
	},
	privacy:function(req,res) {
		res.render('privacy', { title: 'Privacy Policy' });
	},
	pant:function(req,res) {
		res.render('Pant', { title: 'Pants' });
	},
	login:function(req,res) {
		res.render('login', { title: 'Login' });
	},
	jackets:function(req,res) {
		res.render('Jackets', { title: 'Jackets' });
	},
	checkout:function(req,res) {
		res.render('checkout', { title: 'Checkout' });
	},
  
}
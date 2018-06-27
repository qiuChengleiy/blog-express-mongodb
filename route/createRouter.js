module.exports = function() {
	const express = require('express');
	const router = express.Router();

	return {
		use(){
			router.use((req,res,next) => {
				//判断登录状态
				if(!req.session['admin_id'] && req.url != '/tipLogin' && req.url != '/login' && req.url != '/upload') {
					res.redirect('/home/tipLogin');

					const str = '123456';
					const a = require('../libs/common').md5(str);
					console.log(a);
				}else{
					next();
				}
			})

			router.get('/tipLogin',(req,res,next) => {
				res.render('tip.ejs',{message:'请登录哦~'})
			})
			
			router.get('/home',(req,res,next) => {
				res.render('./home.ejs',{title:'home', content:'express'});
				//res.send('ok home').end();
			});
			router.get('/login',(req,res,next) => {
				res.render('./admin/login.ejs',{res:'ok'})
			});
			router.get('/logins',(req,res,next) => {
				res.send(req.url).end();
			});

			router.post('/upload',(req,res,next) => {
				console.log(req.files);
				res.send(req.body).end();
			})

			return router;
		}
	}
}
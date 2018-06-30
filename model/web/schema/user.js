/**
*  用户信息表
*
*/

const mongoose = require('../../../libs/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type:String,  },
	password: { type:String },
	userAge: { type:Number },
	time: { type: String },
	email: { type: String, index:true, default:'test@163.com' }
});

module.exports = mongoose.model('User', userSchema);


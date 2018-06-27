/**
* 数据库连接文件
*/

const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27018/test';

mongoose.connect(db_url);

mongoose.connection.on('connected',() => {
	console.log('\nMongoose is successful on port 27018~~~ O(∩_∩)O~~~\n');
})
mongoose.connection.on('error',() => {
	console.log('\nMongoose connection error: ' + err+'\n');
})
mongoose.connection.on('close',() => {
	console.log('\nMongoose connection disconnected ~~ \n')
})

module.exports = mongoose;


const crypto = require('crypto');

module.exports = {
	//md5 加密
	md5(str) {
		const cryptoObj = crypto.createHash('md5');
		const MD5_SUFFEX = '%dlafjla0%ksas$ad%k9%938^*3819';
		cryptoObj.update(str+MD5_SUFFEX);

		return cryptoObj.digest('hex');
	}
}
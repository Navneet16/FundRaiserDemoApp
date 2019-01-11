var express = require('express');
var router = express.Router();
var category = require('../api/controllers/category.js')
var topLiked = require('../api/controllers/topLiked.js')




var getIp = function(req , res , next){
  var ip = req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  (req.connection.socket ? req.connection.socket.remoteAddress : null);
  req.currentIP = ip ;
  req.session.currentCaptcha = captcha;
  return next();
}

router.post('/fetch', category.getCategoryData)
router.get('/fetchTopLikedProjects' , topLiked.getTopLiked)


module.exports = router;

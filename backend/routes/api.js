var express = require('express');
var router = express.Router();
var category = require('../api/controllers/category.js')
var topLiked = require('../api/controllers/topLiked.js')
var fetchFeatured = require('../api/controllers/fetchFeatured.js')
var userSchema = require('../api/models/user.js')
var userSignUp = require('../api/controllers/userSignup.js')
var userThirdPartyLogin = require('../api/controllers/thirdPartyLogin')
var userThirdPartyLogout = require('../api/controllers/thirdPartyLogout.js')

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
router.get('/fetchFeatured' , fetchFeatured.getFetchFeatured )
router.post('/thirdPartyLogin' , userThirdPartyLogin.register )
router.post('/thirdPartyLogout' , userThirdPartyLogout.logout )
router.post('/register', userSignUp.register)


module.exports = router;

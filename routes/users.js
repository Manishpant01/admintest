var express = require('express');
var router = express.Router();
const controller = require("../contollar/common_controllar");
const auth = require("../auth/authentication");
/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });
//  router.get('/getdata', controller.userData);
// router.get('/',auth.checkToken ,controller.login);
// // router.get('/login/save',controller.login_save);
// router.post('/login',controller.login_save);
router.get('/dblogin',controller.dblogin);
router.post('/userlogin',controller.userlogin);
router.get('/register',controller.register);
router.post('/userRegister',controller.userregister);

router.get('/showpage',function(req,res){
      res.render('index.html');
})

module.exports = router;

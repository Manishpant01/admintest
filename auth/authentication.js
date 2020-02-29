

const jwt = require('jsonwebtoken')
const key=require('../key')



function checkToken(req, res, next) {
    let token = req.cookies.name;
    console.log("TOKEN RECEIVED " + token);
    // next();
    if (!token) {
        res.render('dblogin.html');
    }
    else {

        jwt.verify(token, key.secretkey, function (err, data) {
            if (err) {
                console.log(err)
                res.render('dblogin.html');
            }
            else {
                console.log(data)
                next();
                }
        })

    }
}



module.exports = {
  
    checkToken
}
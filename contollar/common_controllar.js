const key = require('../key.js');
const jwt = require('jsonwebtoken');
const model = require('../model/db_connection');
let alert = require('alert-node');

module.exports = {
    dblogin, userlogin, register, userregister
}

// function mydata(req, res, next) {
//     console.log("request is received");
//     next()
// function login_save(req,res){
//     let keyname = req.body.name;
//     console.log(keyname)
//     jwt.sign({ token : keyname }, key.secretkey,{expiresIn:'1m'}, function (err, token) {
//         if (err) {
//              console.log(err);
//         }
//         else {
//             console.log("TOKEN SEND >>>>"+token);

//             res.cookie('name', token).send("Logged In JWT Token Send")


//         }
//     })

// }
// function login(req,res){

//     res.send("Logged In")
// }


function register(req, res) {
    res.render("register.html")
}

function dblogin(req, res) {
    res.render("dblogin.html");
}

function userregister(req, res) {
    let email = req.body.email;
    let password = req.body.pass;
    console.log(email);
    console.log(password);
    let schemaName = new model({ 'username': email, 'password': password });
    schemaName.save(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            alert(" successfully registered");
            res.render("dblogin.html");


        }
    })
}


function userlogin(req, res) {
    let email = req.body.email;
    let passw = req.body.pass;
    console.log(email);
    console.log(passw);

    model.find({ 'username': email, 'password': passw }, function (err, data) {
        if (err) {
            console.log(err);
        } else if (data.length == 0) {
            res.send('Username and Password Does Not Match');
        }

        else {
            let o_id = data[0].id;
            console.log('id:', o_id);
            jwt.sign({ object_id: o_id }, key.secretkey, { expiresIn: '1d' }, function (err, token) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("TOKEN SEND >>>>" + token);

                    res.cookie('token', token).render('dashboard.html',{o_id});
                    


                }
            })
        }
    })


}

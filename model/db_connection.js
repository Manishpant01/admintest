const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newschema = new Schema({
	username:{type:String},
	password : String,
});
module.exports=mongoose.model('userlogin',newschema)

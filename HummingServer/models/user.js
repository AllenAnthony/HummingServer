/**
 * Created by stardust on 2016/12/9.
 */
var mongoose = require('./mongodb').mongoose;

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id : String,
    password : String
});

module.exports = mongoose.model('User', UserSchema);
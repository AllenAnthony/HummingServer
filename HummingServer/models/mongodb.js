/**
 * Created by stardust on 2016/12/9.
 */
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://123.206.216.203/Humming')
exports.mongoose = mongoose

exports.check = function (model, field, value, callback) {

    model.count({ field : value }, function (err, count) {
        callback(err, !! count);
    })
}
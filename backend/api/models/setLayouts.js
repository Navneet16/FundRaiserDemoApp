var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var Schema = mongoose.Schema;


var setLayoutSchema = new Schema({
    featuredCategory :  { type: String , required: true },
});
var setLayout = mongoose.model('setlayouts', setLayoutSchema);


module.exports={
    setLayout
}

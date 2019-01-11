var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var Schema = mongoose.Schema;

var projectSchemas = new Schema({
        name :  { type: String , required: true },
        creator :  { type: String , required: true },
        createdOn :  { type: Number , required: true },
        description :  { type: String , required: true },
        totalNumberOfPeopleSupport :  { type: Number , required: true },
        subtitle :  { type: String , required: true },
        location :  { type: String , required: true },
        subtitle :  { type: String , required: true },
        category :  { type: String , required: true },
        image :  { type: String , required: true },
        fundsNeeded : { type: Number , required: true },
        investorsIntrested : { type: Number , required: true },
        googleAnalyticsTrackingId : { type: String , required: true },
     
});
var project = mongoose.model('projects', projectSchemas);


module.exports={
    project
}

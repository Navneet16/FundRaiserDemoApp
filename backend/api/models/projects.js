var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var Schema = mongoose.Schema;

var projectSchemas = new Schema({
        projectId : {type : String , required : true},
        name :  { type: String},
        creator :  { type: String , required: true },
        createdOn :  { type: Number , required: true },
        description :  { type: String , required: true },
        totalNumberOfPeopleSupport :  { type: Number },
        subtitle :  { type: String , },
        location :  { type: String , required: true },
        subtitle :  { type: String , },
        category :  { type: String , required: true },
        subCategory : {type : String , required: true },
        image :  { type: String , },
        fundsNeeded : { type: Number ,  },
        investorsIntrested : { type: Number , },
        googleAnalyticsTrackingId : { type: String },
        status :{ type: Boolean , required: true , default : false }
});
var project = mongoose.model('projects', projectSchemas);


module.exports={
    project
}

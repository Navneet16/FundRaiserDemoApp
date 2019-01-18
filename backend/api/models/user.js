var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var Schema = mongoose.Schema;

var userSchemas = new Schema({
        name :  { type: String  },
        email :  { type: String , unique: true },
        password :  { type: String  },
        thirdPartyLogin :  { type: Boolean },
        projectCount : {type:Number},
        activeProjectCount : {type:Number},
        completedProjectCount : {type:Number},
        about :  { type: String  },
        followers :  { type: Number  },
        city :  { type: String  },
        country :  { type: String  },
        phoneNumber :  { type: Number},
        countryCode :  { type: String  },
        photo : {type : String },
        lastLogin      : [[]],
        jwtTokenCreated: [{}],
        thirdPartyToken: [{}],
        time: { type: Date, default: Date.now },
        status: { type: Boolean, default: false },
        emailerToken: { type: String, default: null },
        linkExpires: { type: Date, default: null },
        disableToken: { type: String, default: null },
        disableLinkExpires: { type: Date, default: null },
        resetPasswordToken: { type: String, default: null },
        resetPasswordExpires: { type: Date, default: null },
});

var user = mongoose.model('users', userSchemas);

module.exports={
    user
}

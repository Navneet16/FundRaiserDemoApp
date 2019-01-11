var projects = require('../models/projects');

class DataEdit {
    constructor(options) {
        const defaults = {
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
    // saveUserToken() {
    //     return new Promise((resolve, reject) => {
    //         var that = this;
    //         userSchema
    //             .user
    //             .findOne({email: this.email})
    //             .then(function (saveUserTokenResponse) {
    //                 var token = jwt.sign({
    //                     id: saveUserTokenResponse._id
    //                 }, process.env.JWTSECRET, {
    //                     expiresIn: 30 * 60
    //                 });
    //                 saveUserTokenResponse
    //                     .jwtTokenCreated
    //                     .push({
    //                         token: token,
    //                         exp: Date.now() + 1800000
    //                     });
    //                 saveUserTokenResponse.disableToken = that.linkToken;
    //                 saveUserTokenResponse.disableLinkExpires = Date.now() + 900000
    //                 saveUserTokenResponse
    //                     .save()
    //                     .then(function (save, err) {
    //                         if (save) {
    //                             return resolve({status: true, token: token})
    //                         }
    //                         if (err) {
    //                             return resolve({status: false})
    //                         }
    //                     })
    //             })
    //     })
    // }

}

module.exports = DataEdit;
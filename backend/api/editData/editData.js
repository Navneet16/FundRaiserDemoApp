var projects = require('../models/projects');
var userSchema = require('../models/user')

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
    saveUserToken() {
        return new Promise((resolve, reject) => {
            var that = this;
            userSchema
                .user
                .findOne({email: this.email})
                .then(function (saveUserTokenResponse) {
                    var token = jwt.sign({
                        id: saveUserTokenResponse._id
                    }, process.env.JWTSECRET, {
                        expiresIn: 30 * 60
                    });
                    saveUserTokenResponse
                        .jwtTokenCreated
                        .push({
                            token: token,
                            exp: Date.now() + 1800000
                        });
                    saveUserTokenResponse.disableToken = that.linkToken;
                    saveUserTokenResponse.disableLinkExpires = Date.now() + 900000
                    saveUserTokenResponse
                        .save()
                        .then(function (save, err) {
                            if (save) {
                                return resolve({status: true, token: token})
                            }
                            if (err) {
                                return resolve({status: false})
                            }
                        })
                })
        })
    }
    deleteUserLoginToken() {
        return new Promise((resolve, reject) => {
            var that = this
            jwt.verify(this.jwtToken, process.env.JWTSECRET, function (err, decoded) {
                if (decoded) {
                    userSchema
                        .user
                        .findOne({_id: decoded.id})
                        .then((user) => {
                            if (user) {
                                user.disableToken = null;
                                user.disableLinkExpires = null
                                user
                                    .jwtTokenCreated
                                    .forEach((ex, j) => {
                                        if (ex.token == that.jwtToken) {
                                            userSchema
                                                .user
                                                .updateOne({
                                                    _id: decoded.id
                                                }, {
                                                    $pull: {
                                                        jwtTokenCreated: {
                                                            token: that.jwtToken
                                                        }
                                                    }
                                                }, {multi: true})
                                                .then(function (save, err) {
                                                    if (save) {
                                                        user
                                                            .save(function (err, saved) {
                                                                if (saved) {
                                                                    return resolve({status: true, message: "Logout Successful"});
                                                                } else {
                                                                    return resolve({status: true, message: "Oops!! Some Error Occured"});
                                                                }
                                                            })
                                                    }
                                                    if (err) {
                                                        return resolve({status: true, message: "Oops!! Some Error Occured"});
                                                    }
                                                })
                                        }
                                    })
                            } else {
                                return resolve({status: true, message: "Unauthorized Request"});
                            }
                        })

                } else {
                    return resolve({status: true, message: "Session Expired"});
                }
            })
        })
    }
    deleteUserLoginThirdPartyToken() {
        return new Promise((resolve, reject) => {
            var that = this
          
                    userSchema
                        .user
                        .findOne({email: this.email})
                        .then((user) => {
                            if (user) {
                                user
                                    .thirdPartyToken
                                    .forEach((ex, j) => {
                                        if (ex.thirdPartyToken == that.thirdPartyToken) {
                                            userSchema
                                                .user
                                                .updateOne({
                                                    email: this.email
                                                }, {
                                                    $pull: {
                                                        thirdPartyToken: {
                                                            thirdPartyToken: that.thirdPartyToken
                                                        }
                                                    }
                                                }, {multi: true})
                                                .then(function (save, err) {
                                                    if (save) {
                                                        user
                                                            .save(function (err, saved) {
                                                                if (saved) {
                                                                    return resolve({status: true, message: "Logout Successful"});
                                                                } else {
                                                                    return resolve({status: true, message: "Oops!! Some Error Occured"});
                                                                }
                                                            })
                                                    }
                                                    if (err) {
                                                        return resolve({status: true, message: "Oops!! Some Error Occured"});
                                                    }
                                                })
                                        }
                                    })
                            } else {
                                return resolve({status: true, message: "Unauthorized Request"});
                            }
                        })

 
        })
    }
    

}

module.exports = DataEdit;
var userSchema = require('../models/user');
var editUserData = require('../editData/editData.js')
var userDataFetch = require('../fetchData/fetchdata.js')

class userActivationFunctions {
    constructor(options) {
        const defaults = {
            activationToken: ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
    activationToken() {
        return this.activationToken;
    }
    createEditObject() {
        return new editUserData({
            email: "",
            password: "",
            linkToken: "",
            activationToken: this.activationToken
        })
    }
    createFetchbject() {
        return new userDataFetch({
            email: "",
            password: "",
            linkToken: "",
            activationToken: this.activationToken
        })
    }

    checkActivationLinkExpiration() {
        return new Promise(async (resolve, reject) => {
            var waitFortokencheck = await this.createFetchbject().checkActivationLink()
            if (waitFortokencheck) {
                resolve({
                    status: true,
                    message: waitFortokencheck.message
                })
            } else {
                resolve({
                    status: false,
                    message: waitFortokencheck.message
                })
            }
        })
    }
    restUserActivationParameters() {
        return new Promise(async (resolve, reject) => {
            var waitFortokenDelete = await this.createEditObject().deleteUserActivationToken()
            if (waitFortokenDelete.status) {
                return resolve({
                    status: waitFortokenDelete.status,
                    message: waitFortokenDelete.message
                })
            } else {
                return resolve({
                    status: waitFortokenDelete.status,
                    message: waitFortokenDelete.message
                })
            }
        })
    }
}

module.exports = userActivationFunctions;
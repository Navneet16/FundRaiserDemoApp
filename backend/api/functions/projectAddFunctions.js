var dataFetch = require('../fetchData/fetchdata')
var dataEdit = require('../editData/editData')


class projectAddFunctions {
  
    constructor(options) {
        const defaults = {
            email: "",
            thirdPartytoken : "" ,
            description : "",
            category : "",
            subCategory : "",
            country : "",
            time : "",
            token : ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
     createFetchObject(){
          return new dataFetch({ email : this.email , thirdPartyToken : this.token})
     }
     createEditObject(){
            return new dataEdit({            
            description : this.description,
            category : this.category,
            subCategory : this.subCategory,
            country : this.country,
            time : this.time,
            email : this.email
        })
   }
    checkExistingUser() {
        return new Promise(async(resolve, reject) => {
            var waitForUserMail = await this
                .createFetchObject()
                .checkUser();
            if (waitForUserMail) {
                return resolve({status: true})
            } else {
                return resolve({status: false, message: "User Not Found! Please Try with the registered mail"})
            }
        })
    }
    checkExistingUserActivation() {
        return new Promise(async(resolve, reject) => {
            var waitForUserMailActivation = await this
                .createFetchObject()
                .checkUserEmailActivation()
            if (waitForUserMailActivation) {
                return resolve({status: true})
            } else {
                return resolve({status: false, message: "Email not Activated!! Please activate to continue with our services"})
            }
        })
    }
    checkUserSession() {
        return new Promise(async(resolve, reject) => {
            var waitForCheckExistingUserThirdPartyToken = await this
                .createFetchObject()
                .checkUserThirdPartyToken();
            if (waitForCheckExistingUserThirdPartyToken.status) {
                return resolve({status: waitForCheckExistingUserThirdPartyToken.status})
            } else {
                return resolve({status: waitForCheckExistingUserThirdPartyToken.status, message: waitForCheckExistingUserThirdPartyToken.message})
            }
        })
    
    }
    saveProject(){
        return new Promise(async(resolve, reject) => {
            var waitForSaveProject = await this
                .createEditObject()
                .saveProjectInDb();
            if (waitForSaveProject.status) {
                return resolve({status: waitForSaveProject.status  , data : waitForSaveProject.data , message : waitForSaveProject.message})
            } else {
                return resolve({status: waitForSaveProject.status, message: waitForSaveProject.message})
            }
        })
    }
    
}

module.exports = projectAddFunctions
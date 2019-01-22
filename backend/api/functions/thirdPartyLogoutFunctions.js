var editData = require('../editData/editData.js')
var dataFetch = require('../fetchData/fetchdata.js')


class thirdPartyLogoutFunctions {
    constructor(options) {
        const defaults = {
            email : "",
            token : ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
    getEmail() {
        return this.email
    }
    getToken() {
        return this.token
    }
    createFetchObject() {
        return new dataFetch({email : this.email , thirdPartyToken  : this.token})
   }
   createEditObject() {
    return new editData({email : this.email , thirdPartyToken : this.token})
  }

  checkExistingUserThirdPartyToken(){
    return new Promise(async(resolve, reject) => {
      var waitForCheckExistingUserThirdParty =  await this.createFetchObject().checkUserThirdPartyToken(); 
      if(waitForCheckExistingUserThirdParty.status){
        resolve({status : waitForCheckExistingUserThirdParty.status})
      }else{
        resolve({
            status : waitForCheckExistingUserThirdParty.status,
            message: waitForCheckExistingUserThirdParty.message
        })
     }
  })
}
deleteUserThirdPartyToken(){
    return new Promise(async(resolve, reject) => {
      var waitFordeleteUserThirdParty =  await this.createEditObject().deleteUserLoginThirdPartyToken()
      if(waitFordeleteUserThirdParty){
        resolve({status : waitFordeleteUserThirdParty.status , message : waitFordeleteUserThirdParty.message})
      }else{
        resolve({
            status : waitFordeleteUserThirdParty.status,
            message: waitFordeleteUserThirdParty.message
        })
      }
  })
}

    
}

module.exports = thirdPartyLogoutFunctions;

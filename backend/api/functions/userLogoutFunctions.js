var userFetchData = require('../fetchData/fetchdata.js')
var editUserData = require('../editData/editData.js')

class userLogoutFunctions {
    constructor(options) {
        const defaults = {
         jwtToken : ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
          if (populated.hasOwnProperty(key)) {
              this[key] = populated[key];
          }
        }
      }
    
    getjwtToken() {
        return this.jwtToken;
    }
    createFetchObject(){
       return new userFetchData({ jwtToken : this.jwtToken })
    }
    createEditObject(){
        return new editUserData({ jwtToken : this.jwtToken })
     }
    checkExistingUserJwtToken(){
        return new Promise(async(resolve, reject) => {
          var waitForCheckExistingUserJwtToken =  await this.createFetchObject().checkUserJwtToken(); 
          if(waitForCheckExistingUserJwtToken.status){
            resolve({status : waitForCheckExistingUserJwtToken.status})
          }else{
            resolve({
                status : waitForCheckExistingUserJwtToken.status,
                message: waitForCheckExistingUserJwtToken.message
            })
         }
      })
    }
    deleteUserJwtToken(){
        return new Promise(async(resolve, reject) => {
          var waitFordeleteUserJwtToken =  await this.createEditObject().deleteUserLoginToken()
          console.log(waitFordeleteUserJwtToken)
          if(waitFordeleteUserJwtToken){
            resolve({status : waitFordeleteUserJwtToken.status , message : waitFordeleteUserJwtToken.message})
          }else{
            resolve({
                status : waitFordeleteUserJwtToken.status,
                message: waitFordeleteUserJwtToken.message
            })
          }
      })
    }
}

module.exports =  userLogoutFunctions;

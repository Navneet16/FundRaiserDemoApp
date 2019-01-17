var userSchema = require('../models/user');
var SparkPost = require('sparkpost');
var client = new SparkPost('a714da601b5193007d78ad1612fd341367606d9c');
var loginTemplateModel = require('../helpers/loginTemplateModel.js')
var jwt = require('jsonwebtoken');
var userFetchData = require('../fetchData/fetchdata.js')
var editUserData = require('../editData/editData.js')

class userSingnupFunctions {
    constructor(options) {
        const defaults = {
         email : "",
         password : "",
         currentIP : "",
         screen :  "",
         browser    :   "",
         browserVersion : "",
         mobile : "" ,
         os : "",
         link : "",
         linkToken: ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
          if (populated.hasOwnProperty(key)) {
            this[key] = populated[key];
          }
        }
      }
    
    getEmail() {
        return this.email;
    }
    getPassword(){
       return this.password
    }
    createFetchObject(){
       return new userFetchData({email : this.email , password : this.password})
    }
    createEditObject(){
        return new editUserData({email : this.email , password : this.password , linkToken : this.linkToken})
     }
    checkExistingUser(){
        return new Promise(async(resolve, reject) => {
          var waitForUserMail =  await this.createFetchObject().checkUser() 
          if(waitForUserMail){
            resolve({status : true})
          }else{
            resolve({
                status : false,
                message: "User Not Found! Please Try with the registered mail"
            })
          }
      })
    }
    checkExistingUserActivationStatus(){
        return new Promise(async(resolve, reject) => {
          var waitForUserMailActivation =  await this.createFetchObject().checkUserEmailActivation()
          if(waitForUserMailActivation){
            resolve({status : true})
          }else{
            resolve({
                status : false,
                message: "Email not Activated!! Please activate to continue with our services"
            })
          }
      })
    }
    createAndSaveToken() {
        return new Promise(async(resolve, reject) => {
            var waitFortokenSave =  await this.createEditObject().saveUserToken() 
            if(waitFortokenSave){
              resolve({status : true , token : waitFortokenSave.token , message : "Successfully Logged in!!"})
            }else{
              resolve({
                  status : false,
                  message: "Oops!! Cannot Login at this time"
              })
            }
        })

    }
    checkExistingUserPassword(){
        return new Promise(async(resolve, reject) => {
            var waitToCheckPassword = await this.createFetchObject().checkUserPassword()
            if(waitToCheckPassword){
               resolve({status : true})
              }else{
                resolve({
                    status : false,
                    message: "Incorrect Passowrd"
                })
              }
          }) 

    }
     sendLoginMail(){
       return new Promise(async (resolve , reject)=>{

        var loginTemplate = await loginTemplateModel(this.email, this.currentIP, this.screen, this.browser, this.browserVersion, this.mobile, this.os, this.linkToken)
        client.transmissions.send({
            "options": {
                "transactional": false,
            },
            content: {
                from: `Exchange ${process.env.NO_REPLY_MAIL}`,
                subject: `【Altradex】Successful Login From IP  ${this.currentIP} - ${new Date()}`,
                html: loginTemplate
            },
            recipients: [{
                address: this.email
            }]
        })
        .then(data => {
            if (data) {
                resolve({
                    status: true,
                    message: 'Mail Send!',
                });
            }
        })
        .catch(err => {
            console.log(err)
           return resolve({
                status: false,
                message: 'Login could not procced at this time, Please try again later!',
            });
        });
               
      })
    }
}

module.exports =  userSingnupFunctions;

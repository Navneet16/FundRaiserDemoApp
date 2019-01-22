var userSchema = require('../models/user');
var data = require('../helpers/signupTemplateModel.js')
var dataThirdParty = require('../helpers/thirdPartySignupTemplateModel')
var nodemailer = require('nodemailer');

class thirdPartyLoginFunctions {
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
       return this.email;
    }
    getToken(){
       return this.token
    }
    getSignUpData(){
       return dataThirdParty(this.email)
    }
    checkExistingUser(){
        return new Promise((resolve, reject) => {
        userSchema.user.findOne({
              email: this.email
          }).then(function(result){
               if(result != null){
                    resolve({
                        status : false,
                        message : "User Already Exist"
                    })
               }
               else{
                    resolve({
                        status : true,
                        message : "New User Detected"
                    })
               }
          })
      })
    }

    getNewUserThirdParty(){
        return new Promise((resolve, reject) => {  
              var newData = new userSchema.user({
                  email: this.email,
                  password: null,
                  emailerToken: null,
                  linkExpires: null,
                  status: true
              })
            
             resolve({status : true , newData:  newData}) 
       })  
  
      }
    saveUser(userToSave){
      return new Promise((resolve, reject) => {  
        userToSave.save(function(err , save){
             if(save){
                resolve({
                    status : true ,
                    saved  : save
                })
                 
             }
             else{
                resolve({
                    status : false,
                    message  : err
                })
             }
         })
      })   
    }
    saveUserThirdPartyToken() {
        return new Promise((resolve, reject) => {
            var that = this;
            userSchema
                .user
                .findOne({email: this.email})
                .then(function (saveUserTokenResponse) {
                    saveUserTokenResponse
                        .thirdPartyToken
                        .push({
                            thirdPartyToken: that.token,
                            exp: Date.now() + 1800000
                        });
                    saveUserTokenResponse
                        .save()
                        .then(function (save, err) {
                            if (save) {
                                return resolve({status: true})
                            }
                            if (err) {
                                return resolve({status: false})
                            }
                        })
                })
        })
    }

    sendRegistrationMailThirdParty(){
        return new Promise((resolve , reject)=>{
            var that = this
             var transporter = nodemailer.createTransport({
                 service: 'gmail',
                 auth: {
                     user: 'navneetforportfolio@gmail.com',
                     pass: 'TIMUS1994'
                 }
             });
 
             var mailOptions = {
                 from:	'navneetforportfolio@gmail.com',
                 to:		this.email,
                 subject:'FundRaiser Account Activation',
                 html:	 this.getSignUpData()
             };
 
             transporter.sendMail(mailOptions, function(error, mailsent){
                 if (error) {
                       resolve({
                           status: false,
                           message: 'Registration could not procced at this time, Please try again later!'
                       });
                 } else {
                     return resolve({
                         status: true,
                         message: 'Registration Done ! A mail has been sent to your id' + that.email
                     });
                 }
             });
        })
     }
     checkUserToken(){
         return new Promise((resolve, reject)=>{
             try {
                var that = this
                userSchema
                .user
                .findOne({email: this.email})
                .then((result) => {
                    if(result.thirdPartyToken.length == 0){
                        return resolve({status: true})
                    }
                    result
                        .thirdPartyToken
                        .forEach((element, index) => {
                            if (result.thirdPartyToken.length - 1 == index) {
                                if (element.thirdPartyToken === that.token) {
                                    return resolve({status: true})
                                } else {

                                    return resolve({status: false, message: "Unauthorized Access"})
                                }
                            } else if (element.thirdPartyToken === that.token) {
                                return resolve({status: true})
                            }
                        });
                })
             } catch (error) {
                 console.log(error)
             }

         })
     }
}

module.exports =  thirdPartyLoginFunctions;

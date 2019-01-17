var userSchema = require('../models/user');
var data = require('../helpers/signupTemplateModel.js')
var dataThirdParty = require('../helpers/thirdPartySignupTemplateModel')
var nodemailer = require('nodemailer');

class userSignupFunctions {
    constructor(options) {
        const defaults = {
         email : "",
         password : "",
         confirmPassword : "",
         emailerToken : "" ,
         emailerPreText : "",
         linkExpires : "",
         newUser : "",
         thirdPartyLogin : ""

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
    getConfirmPassword(){
         return this.confirmPassword
    }
    getEmailerToken(){
       return this.emailerToken
     }
     getEmailerPretext(){
         return this.emailerPreText
     }
    getLinkExpires(){
        return this.linkExpires
    }
    getSignUpData(){
        return data(this.email, this.emailerPreText, this.emailerToken)
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
    getNewUser(){
      return new Promise((resolve, reject) => {  
            var newData = new userSchema.user({
                email: this.email,
                password: this.password,
                emailerToken: this.emailerToken,
                linkExpires: this.linkExpires,
                status: false
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
     sendRegistrationMail(){
       return new Promise((resolve , reject)=>{
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'noreplytestmailservices@gmail.com',
                    pass: 'timus1993'
                }
            });

            var mailOptions = {
                from:	'noreplytestmailservices@gmail.com',
                to:		req.body.email,
                subject:'FundRaiser Account Activation',
                html:	 data(this.email, this.emailerPreText, this.emailerToken)
            };

            transporter.sendMail(mailOptions, function(error, mailsent){
                if (error) {
                    if (err.errors[0].code == 5002) {
                        resolve({
                              status: false,
                              message: 'Enter a Valid Email'
                          });
                      }
                      resolve({
                          status: false,
                          message: 'Registration could not procced at this time, Please try again later!'
                      });
                } else {
                    resolve({
                        status: true,
                        message: 'Registration Done ! A mail has been sent to your id' + this.email
                    });
                }
            });



               
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
                 html:	 dataThirdParty(this.email)
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
}

module.exports =  userSignupFunctions;

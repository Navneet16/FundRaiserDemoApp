var randomstring = require('randomstring')
var userSignupFunctions = require('../functions/userSignupFunctions.js')
var emailActivationFunctions = require('../functions/emailActivationFunctions.js')

register = async (req, res, next) => {

    var email = (req.body.email).toLowerCase()
    var password = req.body.password
    var confirmPassword = req.body.confirmPassword
    var thirdPartyLogin =  req.body.thirdPartyLogin

    if(thirdPartyLogin){
        if (email == '' || email == undefined || email == null) {
            return res.send({
                status: false,
                message: "Enter Email"
            })
        }
    }else{
        if (email == '' || email == undefined || email == null) {
            return res.send({
                status: false,
                message: "Enter Email"
            })
        }
        if (password == '' || password == undefined || password == null) {
            return res.send({
                status: false,
                message: "Enter Password"
            })
        }
        if (password.length < 8) {
            return res.send({
                status: false,
                message: "Enter Password of min 8 char"
            })
        }
        if (confirmPassword == '' || confirmPassword == undefined || confirmPassword == null) {
            return res.send({
                status: false,
                message: "Enter ConfirmPassword"
            })
        }
        if (confirmPassword != password) {
            return res.send({
                status: false,
                message: "Password and ConfirmPassword do not Match"
            })
        }
    }


    if(thirdPartyLogin){
        var userCreated = new userSignupFunctions({
            email: email,
            thirdPartyLogin : true
        })
    }else{
                // Creating user 
        var emailerToken = email + randomstring.generate({
            length: 20,
            charset: 'alphanumeric'
        });
        var linkExpires = Date.now() + 86400000; //24 Hours

        var userCreated = new userSignupFunctions({
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            emailerToken: emailerToken,
            emailerPreText: process.env.EMAILER_PRETEXT,
            linkExpires: linkExpires
        })
    }
     await userCreated.checkExistingUser().then(async function(checkUserResponse) {
        if (checkUserResponse.status) {
            var getNewUserObject = await userCreated.getNewUser()
            if (getNewUserObject.status) {
                var saveUser = await userCreated.saveUser(getNewUserObject.newData)
                if (saveUser.status) {
                      if(thirdPartyLogin){
                         await userCreated.sendRegistrationMailThirdParty().then(async function(thirdPartyLoginResponse){
                        if(thirdPartyLoginResponse.status){
                           res.send({
                               status: thirdPartyLoginResponse.status,
                               message: thirdPartyLoginResponse.message
                           })
                        }else{
                           res.send({
                               status: thirdPartyLoginResponse.status,
                               message: thirdPartyLoginResponse.message
                           })
                        }
                     })

                    }else{
                        var sendMail = await userCreated.sendRegistrationMail()
                        if (sendMail.status) {
                            res.send({
                                status: sendMail.status,
                                message: sendMail.message
                            })
    
                        } else {
                            res.send({
                                status: sendMail.status,
                                message: sendMail.message
                            })
    
                        }
                    }
                } else {
                    res.send({
                        status: saveUser.status,
                        message: saveUser.message
                    })

                }
            } else {
                res.send({
                    status: getNewUserObject.status,
                    message: getNewUserObject.message
                })
            }
        } else {
            res.send({
                status: checkUserResponse.status,
                message: checkUserResponse.message
            })
        }
    })
}

verifyRegisterMethod = async(req, res, next) => {
    var Token = req.params.token;
    if (Token) {
        var emailActivation = new emailActivationFunctions({activationToken : Token})
         await emailActivation.checkActivationLinkExpiration().then(async(emailActivationResponse)=>{
              if(emailActivationResponse.status){
                await emailActivation.restUserActivationParameters().then((restUserActivationParametersResponse)=>{
                       if(restUserActivationParametersResponse.status){
                           return res.send({
                                status: restUserActivationParametersResponse.status,
                                message: restUserActivationParametersResponse.message
                            })
                        }else{
                            return res.send({
                                status: restUserActivationParametersResponse.status,
                                message: restUserActivationParametersResponse.message
                            })
                        }
                    })
              }else
              {
               return res.send({
                    status: emailActivationResponse.status,
                    message: emailActivationResponse.message
                })
              }
         })
    } else {
           res.json({
               status : false ,
               message : "Activation Link Not Provided"
           })
    }
}

getEmailActivationLinkMethod = (req, res, next) => {
    var email = req.body.email;
    var emailerToken = email + randomstring.generate({
        charset: '8008008'
    });;
    var linkExpires = Date.now() + 86400000; //24 Hours
    if (!email && email == '' && email == undefined) return res.send({
        status: false,
        message: 'This account is not exists!'
    });
    userSchema.user.findOne({
        email: email
    }, function(err, user) {
        if (err) return res.send({
            status: false,
            message: 'Internal Server Error. Please try again later.'
        });
        if (!user) return res.send({
            status: false,
            message: 'This account is not exists,Please complete the registration proccess.'
        });
        if (user.linkExpires > Date.now()) return res.send({
            status: false,
            message: 'Verifiction link already sent to you, Please visit your mailbox and activate the account!'
        });
        user.linkExpires = linkExpires;
        user.emailerToken = emailerToken;
        user.save(function(err, saved) {
            if (err) return res.send({
                status: false,
                message: 'Internal Server Error. Please try again later.'
            });
            if (!saved) return res.send({
                status: false,
                message: 'Internal Server Error. Please try again later.'
            });
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'noreplytestmailservices@gmail.com',
                    pass: 'timus1993'
                }
            });
            var mailOptions = {
                from: 'noreplytestmailservices@gmail.com',
                to: email,
                subject: req.body.email,
                html: 'You are receiving this because you have signed up to the Exchange using your mail ID(' + req.body.email + ').<br>' +
                    'Please click on the following link, to complete the activation process: ' +
                    '<a href="' + config.emailerPreText + '/api/activate/' + emailerToken + '">Click here</a> to activate<br>' +
                    '<b style="color:#00FF00">link will expire after 24 Hours form now</b>' + '<br>' +
                    'If you did not sign up to the Exchange`, please ignore this email and your email will not be used for Signup.<br>' +
                    '<b style="color:#FF0000">If you forgot to verify your account,Then you can resend the verification link after 24 Hours form now</b><br>'
            };
            transporter.sendMail(mailOptions, function(error, mailsent) {
                if (error) return res.send({
                    status: false,
                    message: 'Internal Server Error while sending mail. Please try again later.'
                });
                if (!mailsent) return res.send({
                    status: false,
                    message: 'Could not send actiavtion link at this time. Please try again later.'
                });
                return res.send({
                    status: true,
                    message: 'An Activation link will be sent to you shortly,Activation link is valid for 24 Hours'
                });

            });
        });
    });
}

module.exports = {
    register,
    verifyRegisterMethod,
    getEmailActivationLinkMethod
}
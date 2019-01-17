var nodemailer = require('nodemailer');
var randomstring = require("randomstring");
var Cryptr = require('cryptr');
var cryptr = new Cryptr('somnav@1994');
var userLoginFunctions = require('../functions/userLoginFunctions')
var userLogoutFunctions = require('../functions/userLogoutFunctions')

module.exports = {

    signinMethod: async function(req, res) {

        var email = (req.body.loginEmail).toLowerCase();
        var password = req.body.loginPassword;
    
        if (email == '' || password == '' || email == undefined || email == null || password == undefined || password == null) {
            return res.json({
                status: false,
                message: "Please Enter Email and Password",
            });
        }
        var linkCreationToken = randomstring.generate();
        var userObjectForLogin = new userLoginFunctions({
            email: email,
            password: password,
            currentIP: req.currentIP,
            screen: req.body.loginSystemInfo.screen,
            browser: req.body.loginSystemInfo.browser,
            browserVersion: req.body.loginSystemInfo.browserVersion,
            mobile: req.body.loginSystemInfo.mobile,
            os: req.body.loginSystemInfo.os,
            linkToken: linkCreationToken,
            link: `${process.env.EMAILER_PRETEXTT}/disable?email=${email}&linkCreationToken=${linkCreationToken}`
        })
    
        await userObjectForLogin.checkExistingUser().then(async function(authenticateMailResponse) {
            if (authenticateMailResponse.status) {
                await userObjectForLogin.checkExistingUserActivationStatus().then(async function(checkExistingUserActivationStatusResponse) {
                    if (checkExistingUserActivationStatusResponse.status) {
                        await userObjectForLogin.checkExistingUserPassword().then(async function(checkExistingUserPasswordResponse) {
                            if (checkExistingUserPasswordResponse.status) {
                                await userObjectForLogin.sendLoginMail().then(async function(sendLoginMailResponse) {
                                    if (sendLoginMailResponse.status) {
                                        await userObjectForLogin.createAndSaveToken().then(function(createAndSaveTokenResponse) {
                                            if (createAndSaveTokenResponse.status) {
                                                res.cookie('authenticationkey', [createAndSaveTokenResponse.token, true]);
                                                return res.json({
                                                    status: createAndSaveTokenResponse.status,
                                                    message: createAndSaveTokenResponse.message,
                                                    token: createAndSaveTokenResponse.token,
                                                });
                                            }else {
                                                return res.json({
                                                    status: createAndSaveTokenResponse.status,
                                                    message: createAndSaveTokenResponse.message,
                                                });
                                            }
                                        })
                                    } else {
                                        return res.json({
                                            status: sendLoginMailResponse.status,
                                            message: sendLoginMailResponse.message,
                                        });
                                    }
                                })
                            } else {
                                return res.json({
                                    status: checkExistingUserPasswordResponse.status,
                                    message: checkExistingUserPasswordResponse.message,
                                });
                            }
                        })
                    } else {
                        return res.json({
                            status: checkExistingUserActivationStatusResponse.status,
                            message: checkExistingUserActivationStatusResponse.message,
                        });
                    }
                })
    
            } else {
                return res.json({
                    status: authenticateMailResponse.status,
                    message: authenticateMailResponse.message,
                });
            }
        })
    },

        signoutMethod: async function(req, res) {
            var detail = req.body.token
            var userObjectForLogout = new userLogoutFunctions({
                jwtToken: detail
            })
            await userObjectForLogout.checkExistingUserJwtToken().then(async(checkExistingUserJwtTokenResponse)=>{
                if(checkExistingUserJwtTokenResponse.status){
                    await userObjectForLogout.deleteUserJwtToken().then((deleteUserJwtTokenResponse)=>{
                        if(deleteUserJwtTokenResponse.status){
                            res.clearCookie('authenticationkey')
                            return res.json({
                                status: deleteUserJwtTokenResponse.status,
                                message: deleteUserJwtTokenResponse.message,
                            }); 
                        }else
                        {
                            return res.json({
                                status: deleteUserJwtTokenResponse.status,
                                message: deleteUserJwtTokenResponse.message,
                            });    
                        }
                    })
                }else
                {
                    return res.json({
                        status: checkExistingUserJwtTokenResponse.status,
                        message: checkExistingUserJwtTokenResponse.message,
                    });   
                }  
            }) 
        },

        getForgetPasswordLinkMethod: function(req, res) {

            var lang = getLanguageMessage.en
            if (!req.body) return res.send({
                status: false,
                message: 'Invalid form data!'
            });
            var email = req.body.recoveryPasswordMail;
            var randomValue = randomstring.generate(32);
            var resetPasswordToken = email + randomValue;
            var resetPasswordExpires = Date.now() + 600000; //10 min
            var otp = randomstring.generate(6);
            if (!email || email == null || email == '' || resetPasswordExpires == '') return res.send({
                status: false,
                message: lang.signInvData
            });
            userSchema.user.findOne({
                email: email
            }, function(err, user) { 
                if (err) return res.send({
                    status: false,
                    message: lang.signInSeEpta
                });
                if (!user || user == null || user == undefined) return res.send({
                    status: false,
                    message: lang.signInTaccNotEx
                });
                if (user.resetPasswordExpires > Date.now()) return res.send({
                    status: false,
                    message: lang.signInRecLiAlSen
                });
                if (user.status == false) return res.send({
                    status: false,
                    message: lang.signInYAccNoActP
                });
                if (user.resetPasswordExpires < Date.now() || user.resetPasswordExpires == null || user.resetPasswordToken == null) {
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: config.noreplyemail,
                            pass: config.noreplyemailPass
                        }
                    });
                    var mailOptions = {
                        from: config.noreplyemail,
                        to: email,
                        subject: config.TokenName + '-' + lang.ForgetPassSub,
                        html: '<b>' + lang.ForgetPassBodyHi + ',' + '</b><br>' +
                            user.name + '<br><br>' +
                            lang.ForgetPassBodyLineOne + '<br>' +
                            '<center><a href="' + config.emailerPreText + '/api/forgetPassword/?token=' + resetPasswordToken + '&email=' + email + '&otp=' + otp + '" style="background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial;background-color:#216378;color:white;font-size:15px;padding:10px;border-radius:10px;text-align:center;display:inline-block;text-decoration:none" >' + lang.ForgetPassBtn + '</a></center><br>' +
                            lang.ForgetPassBodyLineLast + '<br><br>' +
                            '<b>' + lang.ForgetPassBodyThanks + ',' + '</b><br>' +
                            '<b>' + config.TokenName + ' ' + 'Team.</b>'
                    };
                    transporter.sendMail(mailOptions, function(error, mailsent) {
                        //console.log('getForgetPasswordLinkMethod',error,mailsent)
                        //console.log('getForgetPasswordLinkMethod',mailOptions)
                        if (error) return res.send({
                            status: false,
                            message: lang.signInInSeErrWhSMail
                        });
                        if (mailsent && mailsent != '' && mailsent != null) {
                            user.resetPasswordExpires = resetPasswordExpires;
                            user.resetPasswordToken = resetPasswordToken;
                            user.otp = otp;
                            user.save(function(err, saved) {
                                //console.log('getForgetPasswordLinkMethod',err,saved)
                                if (err) return res.send({
                                    status: false,
                                    message: lang.signInSeEpta
                                });
                                if (saved && saved != null) {
                                    return res.send({
                                        status: true,
                                        message: lang.signInEmailSent
                                    });
                                } else {
                                    return res.send({
                                        status: false,
                                        message: lang.signInSoEmOPtAftTi
                                    });
                                }
                            });
                        } else {
                            return res.send({
                                status: false,
                                message: lang.signInSoEmOPtAftTi
                            });
                        }
                    });
                } else {
                    return res.send({
                        status: false,
                        message: lang.signInCoNoProyRe
                    });
                }
            });
        },

        verifyForgetPasswordLinkMethod: function(req, res) {
            var lang = getLanguageMessage.en
            if (!req.query) return res.redirect('/');
            var token = req.query.token;
            var email = req.query.email;
            var otp = req.query.otp;
            if (!token || token == null || token == '' || token == undefined) return res.render('common', {
                title: lang.singInForPassCommTI,
                heading: lang.signInsignInThNoVaiRe,
                message: lang.signInWaNShm,
                linkHref: '/',
                linkText: lang.signInGtoLogPa
            });
            if (!email || email == null || email == '' || email == undefined || !otp || otp == '') return res.render('common', {
                title: lang.singInForPassCommTI,
                heading: lang.signInsignInThNoVaiRe,
                message: lang.signInWaNShm,
                linkHref: '/',
                linkText: lang.signInGtoLogPa
            });
            userSchema.user.findOne({
                email: email,
                resetPasswordToken: token
            }, function(err, user) {
                if (err) return res.render('common', {
                    title: lang.singInForPassCommTI,
                    heading: lang.signInInSeError,
                    message: lang.signInWaNbKsErr,
                    linkHref: '/',
                    linkText: lang.signInGtoLogPa
                });
                if (!user) return res.render('common', {
                    title: lang.singInForPassCommTI,
                    heading: lang.signInsignInThNoVaiRe,
                    message: lang.signInWaNShm,
                    linkHref: '/',
                    linkText: lang.signInGtoLogPa
                });
                if (user.resetPasswordExpires < Date.now() || user.resetPasswordExpires == null || user.resetPasswordExpires == '') return res.render('common', {
                    title: lang.singInForPassCommTI,
                    heading: lang.signInSyReLinEx,
                    message: lang.signInTprLHbExpi,
                    linkHref: '/',
                    linkText: lang.signInGtoLogPa
                });
                if (user.resetPasswordExpires > Date.now()) {
                    user.resetPasswordExpires = null;
                    user.resetPasswordToken = null;
                    user.save(function(err, saved) {
                        if (err) return res.render('common', {
                            title: lang.singInForPassCommTI,
                            heading: lang.signInInSeError,
                            message: lang.signInWaNbKsErr,
                            linkHref: '/',
                            linkText: lang.signInGtoLogPa
                        });
                        if (!saved) return res.render('common', {
                            title: lang.singInForPassCommTI,
                            heading: lang.signInInSeError,
                            message: lang.signInWaNbKsErr,
                            linkHref: '/',
                            linkText: lang.signInGtoLogPa
                        });
                        return res.render('reset', {
                            title: lang.singInForPassCommTI,
                            email: user.email,
                            otp: user.otp
                        });
                    });
                }
            });
        },

        saveNewPasswordMethod: function(req, res) {
            var lang = getLanguageMessage.en
            var password = req.body.resetPassword;
            var repassword = req.body.resetConfirmPassword;
            var email = req.body.resetEmail;
            var otp = req.body.resetOtp;
            var password_hash = web3.toHex({
                test: password
            });
            var password_final = cryptr.encrypt(password_hash);
            if (email != null && otp != null && password != '' && repassword != '' && email != '' && otp != '') {
                if (password == repassword && password != null && repassword != null) {
                    userSchema.user.findOne({
                        email: email,
                        otp: otp
                    }, function(err, user) {
                        if (user) {
                            user.password = password_final;
                            user.otp = null;
                            user.save(function(err, saved) {
                                if (err) {
                                    return res.send({
                                        status: false,
                                        message: lang.signInCoNoChaPAthTim,
                                    });
                                }
                                return res.send({
                                    status: true,
                                    message: lang.signInPaSaSucc,
                                });
                            });
                        } else {
                            return res.json({
                                status: false,
                                message: lang.signInTaccNotEx,
                            });
                        }

                    });
                } else {
                    return res.send({
                        status: false,
                        message: lang.signInInVailPassDiNMatWiCoP,
                    });
                }
            } else {
                return res.send({
                    status: false,
                    message: lang.signInIfDFcno,
                });
            }
        }
};
var thirdPartyLoginFunctions = require('../functions/thirdPartyLoginFunctions')
// var emailActivationFunctions = require('../functions/emailActivationFunctions.js')

register = async (req, res, next) => {
     try {
        if(!req.body.email || !req.body.token){
            return res.send({
                status: false,
                message: "Invalid Data"
            })
         }else{
              
            var thirdPartyLogin =  new thirdPartyLoginFunctions({
                email : req.body.email,
                token : req.body.token
            })        

            await thirdPartyLogin.checkExistingUser().then(async function(checkExistingUserResponse){
                if(checkExistingUserResponse.status){
                    await thirdPartyLogin.getNewUserThirdParty().then(async function(getNewUserThirdPartyResponse){
                        if(getNewUserThirdPartyResponse.status){
                            await thirdPartyLogin.saveUser(getNewUserThirdPartyResponse.newData).then(async function(saveUserResponse){

                                if(saveUserResponse.status){
                                   await thirdPartyLogin.sendRegistrationMailThirdParty().then(async function(sendRegistrationMailThirdPartyResponse){

                                       if(sendRegistrationMailThirdPartyResponse.status){
                                            return res.json({
                                                status: sendRegistrationMailThirdPartyResponse.status,
                                                message: sendRegistrationMailThirdPartyResponse.message
                                            }); 
                                       }else{
                                        return res.json({
                                            status: sendRegistrationMailThirdPartyResponse.status,
                                            message: sendRegistrationMailThirdPartyResponse.message
                                        }); 
                                       }
                                   })
                                }else{
                                    return res.json({
                                        status: saveUserResponse.status,
                                        message: saveUserResponse.message
                                    }); 
                                }
                            })
                        }else{
                            return res.json({
                                status: getNewUserThirdPartyResponse.status,
                                message: getNewUserThirdPartyResponse.message
                            }); 
                        }
                    })
                }else{
                      // check for token and authenticate
                      await thirdPartyLogin.checkUserToken().then(async function(checkUserTokenResponse){
                           if(checkUserTokenResponse.status){
                                return res.json({
                                    status: checkUserTokenResponse.status,
                                    message: checkUserTokenResponse.message
                                }); 
                           }else{
                            return res.json({
                                status: checkUserTokenResponse.status,
                                message: checkUserTokenResponse.message
                            }); 
                           }
                      })
                }
            })

         }
         
     } catch (error) {
        return res.send({
            status: false,
            message: error
        })
     }
} 

module.exports = {
    register
}
var thirdPartyLogoutFunctions = require('../functions/thirdPartyLogoutFunctions')

logout = async (req, res, next) => {

      var userObjectForLogout = new thirdPartyLogoutFunctions({
          email : req.body.email,
          token : req.body.token
      })
      await userObjectForLogout.checkExistingUserThirdPartyToken().then(async(checkExistingUserThirdPartyTokenResponse)=>{
          console.log("llllllllll",checkExistingUserThirdPartyTokenResponse)
            if(checkExistingUserThirdPartyTokenResponse.status){
              await userObjectForLogout.deleteUserThirdPartyToken().then((deleteUserThirdPartyTokenResponse)=>{
                  if(deleteUserThirdPartyTokenResponse.status){
                      return res.json({
                          status: deleteUserThirdPartyTokenResponse.status,
                          message: deleteUserThirdPartyTokenResponse.message,
                      }); 
                  }else
                  {
                      return res.json({
                          status: deleteUserThirdPartyTokenResponse.status,
                          message: deleteUserThirdPartyTokenResponse.message,
                      });    
                  }
              })
          }else
          {
              return res.json({
                  status: checkExistingUserThirdPartyTokenResponse.status,
                  message: checkExistingUserThirdPartyTokenResponse.message,
              });   
          }  
        
     })
} 

module.exports = {
    logout
}
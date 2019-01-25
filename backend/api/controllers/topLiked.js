var projectFunctions = require('../functions/projectFunctions.js')

module.exports = {
     getTopLiked :async function (req, res) {
               try {
                    var topLikedToFetch = new projectFunctions({category : req.body.category})
                    await topLikedToFetch.fetchTopLikedFromDb().then(function(fetchTopLikedFromDbResponse){
                       if(fetchTopLikedFromDbResponse.status){
                          return res.send({
                                status : fetchTopLikedFromDbResponse.status,
                                data : fetchTopLikedFromDbResponse.data,
                                message : fetchTopLikedFromDbResponse.message
                            })
            
                        }else{
                            return res.send({
                                status : fetchTopLikedFromDbResponse.status,
                                data : fetchTopLikedFromDbResponse.data,
                                message : fetchTopLikedFromDbResponse.message
                            })
                        }
                    })
               } catch (error) {
                return  res.send({
                    status : false,
                    data : [],
                    message : error
                })
            }  
        }
};  






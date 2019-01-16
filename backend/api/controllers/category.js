var projectFunctions = require('../functions/projectFunctions.js')

module.exports = {

    getCategoryData :async function (req, res) {
             if(!req.body.category){
                 return res.send({status : false , message : "No Category Sent"})
             }else{
               try {
                    var categoryToFetch = new projectFunctions({category : req.body.category})
                    await categoryToFetch.fetchCategoryFromDb().then(function(fetchCategoryFromDbResponse){
                        if(fetchCategoryFromDbResponse.status){
                          return  res.send({
                                status : fetchCategoryFromDbResponse.status,
                                data : fetchCategoryFromDbResponse.data,
                                message : fetchCategoryFromDbResponse.message
                            })
            
                        }else{
                            return  res.send({
                                status : fetchCategoryFromDbResponse.status,
                                data : fetchCategoryFromDbResponse.data,
                                message : fetchCategoryFromDbResponse.message
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
        }
    };  






var getFeaturedFunctions = require('../functions/projectFunctions.js')

module.exports = {

    getFetchFeatured :async function (req, res) {
               try {
                    var featuredCategoryToFetch = new getFeaturedFunctions()
                    await featuredCategoryToFetch.fetchFeaturedCategoryFromDb().then(function(fetchCategoryToFetchDbResponse){
                        if(fetchCategoryToFetchDbResponse.status){
                          return  res.send({
                                status : fetchCategoryToFetchDbResponse.status,
                                data : fetchCategoryToFetchDbResponse.data,
                                category : fetchCategoryToFetchDbResponse.category,
                                message : fetchCategoryToFetchDbResponse.message
                            })
            
                        }else{
                            return  res.send({
                                status : fetchCategoryToFetchDbResponse.status,
                                data : fetchCategoryToFetchDbResponse.data,
                                message : fetchCategoryToFetchDbResponse.message
                            })
                        }
                    })
               } catch (error) {
                return  res.send({
                    status : false,
                    data : [],
                    message : new Error({message : error})
                })
               }  
        }
    };  






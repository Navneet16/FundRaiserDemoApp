var projectSchema = require('../models/projects.js');

class dataFetch {
    constructor(options) {
        const defaults = {
            category: ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }

    getCategory() {
        return this.category;
    }
    // checkUser() {
    //     return new Promise((resolve, reject) => {
    //         userSchema
    //             .user
    //             .findOne({email: this.email})
    //             .then(function (result) {
    //                 if (result != null) {
    //                     resolve(true)
    //                 } else {
    //                     resolve(false)
    //                 }
    //             })
    //     })
    // }
    // checkUserEmailActivation() {
    //     return new Promise((resolve, reject) => {
    //         userSchema
    //             .user
    //             .findOne({email: this.email})
    //             .then(function (result) {
    //                 if (!result.status) {
    //                     resolve(false)
    //                 } else {
    //                     resolve(true)
    //                 }
    //             })
    //     })
    // }
    // checkUserJwtToken() {
    //     return new Promise((resolve, reject) => {
    //         var that = this
    //         jwt.verify(this.jwtToken, process.env.JWTSECRET, function (err, decoded) {
    //             if (decoded) {
    //                 userSchema
    //                     .user
    //                     .findOne({_id: decoded.id})
    //                     .then((result) => {
    //                         result
    //                             .jwtTokenCreated
    //                             .forEach((element, index) => {

    //                                 if (result.jwtTokenCreated.length - 1 == index) {
    //                                     if (element.token === that.jwtToken) {
    //                                         return resolve({status: true})
    //                                     } else {
    //                                         return resolve({status: false, message: "Unauthorized Access"})
    //                                     }
    //                                 } else if (element.token === that.jwtToken) {
    //                                     return resolve({status: true})
    //                                 }
    //                             });
    //                     })
    //             } else {
    //                 return resolve({status: false, message: err})
    //             }

    //         })

    //     })
    // }
    fetchCategory(){
        return new Promise((resolve, reject) => {
            try {
                var that = this;
                projectSchema
                .project
                .find({category: this.category})
                .then(function (result) {
                    if (result) {
                        resolve({
                            status : true,
                            data : result,
                            message : `Successfully Fetched ${that.category}`
                        })
                    }
                })
              } catch (error) {
                resolve({
                    status : true,
                    data : error,
                    message : `Successfully Fetched ${that.category}`
                })
              }  
         
       })
    }
    fetchTopLiked(){
        return new Promise((resolve, reject) => {
          try {
            projectSchema.project.aggregate([
                { "$group":{ 
                    "_id": "$category",
                    "maxQuantity": { "$max": "$totalNumberOfPeopleSupport" },
                    "docs": { "$push": {
                        "data": "$$ROOT",
                        "name": "$name",
                        "totalNumberOfPeopleSupport": "$totalNumberOfPeopleSupport"
                    }}
                }},
                { "$project": {
                    "maxQuantity":1,
                    "docs": {
                        "$setDifference": [
                           { "$map": {
                               "input": "$docs",
                               "as": "doc",
                               "in": {
                                   "$cond": [ 
                                       { "$eq": [ "$maxQuantity", "$$doc.totalNumberOfPeopleSupport" ] },
                                       "$$doc",
                                       false
                                   ]
                               }
                           }},
                           [false]
                        ]
                    }
                }}
            ]).then(function(topLikedResponse){
                var array = []
                topLikedResponse.forEach((element,i,a) => {
                    if(a.length -1 == i){
                        array.push(element.docs[0].data)
                        return resolve({
                            status : true,
                            data : array,
                            message : `Successfully fetched`
                        })
                    }
                    array.push(element.docs[0].data)
                });
            })
          } catch (error) {
            return resolve({
                status : false,
                data : error,
                message : `Unable To Fetch`
            })
          } 
       
        
       })
    }
}


module.exports = dataFetch;

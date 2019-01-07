var projectDataFetch = require('../db/fetchData/getProjects')

class userActivationFunctions {
    constructor(options) {
        const defaults = {
            req : "",
            res : ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
  async fetchData() {
    try {
        var that = this
        var get = await new projectDataFetch({
            category : this.req.body.category
        }); 
        await get.categoryProjectsFetch().then((categoryProjectsFetchResponse)=>{
            if(categoryProjectsFetchResponse.status){
                that.res.send({
                    status : categoryProjectsFetchResponse.status,
                    data : categoryProjectsFetchResponse.data
                })
            }else{
                that.res.send({
                    status : categoryProjectsFetchResponse.status,
                    err : categoryProjectsFetchResponse.err
                })
            }
        })
    } catch (error) {
        this.res.send({
            status : false,
            err : error
        })
    }  
  
    }
 
}

module.exports = userActivationFunctions;
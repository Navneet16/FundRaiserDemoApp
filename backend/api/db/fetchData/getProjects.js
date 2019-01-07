var projectSchema = require('../../../models/projects');

class projectDataFetch {
    constructor(options) {
        const defaults = {
          category : ""
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
    categoryProjectsFetch() {
        return new Promise((resolve) => {
          try {
            projectSchema
            .project
            .find({category: this.category})
            .then(function (result) {
                if (result) {
                    resolve({
                        status : true,
                        data : result
                    })
                }
            })
          } catch (error) {
            resolve({
                status : true,
                data : error
            })
          }  
     
        })
    }
}


module.exports = projectDataFetch;

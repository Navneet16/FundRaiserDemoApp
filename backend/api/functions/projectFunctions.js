var editData = require('../editData/editData.js')
var dataFetch = require('../fetchData/fetchdata.js')

class projectCategoryFunctions {
    constructor(options) {
        const defaults = {
            category: "",
        };
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }
        }
    }
    getCategory() {
        return this.category
    }
    createFetchObjectForCategory() {
        return new dataFetch({category: this.category})
   }
   createFetchObject() {
    return new dataFetch()
  }

    fetchCategoryFromDb() {
            return new Promise(async(resolve, reject) => {
                var waitForFetchCategory = await this
                    .createFetchObjectForCategory()
                    .fetchCategory();
                if (waitForFetchCategory.status) {
                    return resolve({status: waitForFetchCategory.status , data: waitForFetchCategory.data , message : waitForFetchCategory.message})
                } else {
                    return resolve({status: waitForFetchCategory.status, message: waitForFetchCategory.message})
                }
            })
    }
    fetchTopLikedFromDb() {
        return new Promise(async(resolve, reject) => {
            var waitForFetchTopLiked = await this
                .createFetchObject()
                .fetchTopLiked();
            if (waitForFetchTopLiked.status) {
                return resolve({status: waitForFetchTopLiked.status , data: waitForFetchTopLiked.data , message : waitForFetchTopLiked.message})
            } else {
                return resolve({status: waitForFetchTopLiked.status, data: waitForFetchTopLiked.data, message: waitForFetchTopLiked.message})
            }
        })
    }
    fetchFeaturedCategoryFromDb() {
        return new Promise(async(resolve, reject) => {
            var waitForFetchFeaturedCategory = await this
                .createFetchObject()
                .fetchFeaturedCategory();
            if (waitForFetchFeaturedCategory.status) {
                return resolve({status: waitForFetchFeaturedCategory.status , data: waitForFetchFeaturedCategory.data , category : waitForFetchFeaturedCategory.category , message : waitForFetchFeaturedCategory.message})
            } else {
                return resolve({status: waitForFetchFeaturedCategory.status, data: waitForFetchFeaturedCategory.data, message: waitForFetchFeaturedCategory.message})
            }
        })
    }
}

module.exports = projectCategoryFunctions;

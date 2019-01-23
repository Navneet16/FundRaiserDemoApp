var projectAddFunctions = require('../functions/projectAddFunctions')

module.exports = {
    submitProject: async function(req, res) {
        try {
            if (!req.body.email) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Email"
                })
            } else if (!req.body.token) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Token"
                })
            } else if (!req.body.description) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Description"
                })
            } else if (!req.body.category) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Category"
                })
            } else if (!req.body.subCategory) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Subcategory"
                })
            } else if (!req.body.country) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Country"
                })
            } else if (!req.body.time) {
                return res.send({
                    status: false,
                    data: [],
                    message: "Invalid Time"
                })
            } else {

                try {
                    var projectAddFunctionsClass = new projectAddFunctions({
                        email: req.body.email,
                        token: req.body.token,
                        description: req.body.description,
                        category: req.body.category,
                        subCategory: req.body.subCategory,
                        country: req.body.country,
                        time: req.body.time
                    })
                    await projectAddFunctionsClass.checkExistingUser().then(async function(checkExistingUserResponse) {
                        if (checkExistingUserResponse.status) {
                            await projectAddFunctionsClass.checkExistingUserActivation().then(async function(checkExistingUserActivationResponse) {
                                if (checkExistingUserActivationResponse.status) {
                                    await projectAddFunctionsClass.checkUserSession().then(async function(checkUserSessionResponse) {
                                        if (checkUserSessionResponse.status) {
                                            await projectAddFunctionsClass.saveProject().then(async function(saveProjectResponse) {
                                                if (saveProjectResponse.status) {
                                                    return res.send({
                                                        status: checkUserSessionResponse.status,
                                                        data: saveProjectResponse.data,
                                                        message: checkUserSessionResponse.message
                                                    })
                                                } else {
                                                    return res.send({
                                                        status: checkUserSessionResponse.status,
                                                        data: [],
                                                        message: checkUserSessionResponse.message
                                                    })
                                                }
                                            })
                                        } else {
                                            return res.send({
                                                status: checkUserSessionResponse.status,
                                                data: [],
                                                message: checkUserSessionResponse.message
                                            })
                                        }
                                    })
                                } else {
                                    return res.send({
                                        status: checkExistingUserActivationResponse.status,
                                        data: [],
                                        message: checkExistingUserActivationResponse.message
                                    })
                                }
                            })

                        } else {
                            return res.send({
                                status: checkExistingUserResponse.status,
                                data: [],
                                message: checkExistingUserResponse.message
                            })
                        }
                    })

                } catch (error) {
                    return res.send({
                        status: false,
                        data: [],
                        message: error
                    })
                }
            }
        } catch (error) {
            return res.send({
                status: false,
                data: [],
                message: error
            })
        }
    }
};
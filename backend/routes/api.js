var express = require('express');
var router = express.Router();

var userActivationFunctions = require('../api/controllers/fetchProjects')

router.post('/fetch', (req, res)=>{
   var fetch =  new userActivationFunctions({req : req , res : res })
   fetch.fetchData()
})

module.exports = router
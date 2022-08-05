const router = require('express').Router();
const userService = require('../services/userService');


router.post ('/create', (req, res) => {

console.log(req.body)

});


module.exports = router;
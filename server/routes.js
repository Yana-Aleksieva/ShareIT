const router = require('express').Router();
const userController = require('./controllers/userController');

router.use('/data', userController)

module.exports = router;
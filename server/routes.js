const router = require('express').Router();
const userController = require('./controllers/userController');
const  testsController = require('./controllers/testsController');

router.use('/data', userController);
router.use('/tests', testsController)

module.exports = router;
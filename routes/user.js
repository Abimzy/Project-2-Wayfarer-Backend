const
    express = require('express'),
    app = express(),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    userControllers = require('../controllers/user');
    verifyToken = require('../utils/utils');


router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);

// protected routes
router.get('/', verifyToken, userControllers.findUser);
router.delete('/', verifyToken, userControllers.deleteUser);

module.exports = router; 
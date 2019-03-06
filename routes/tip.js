const
    express = require('express');
    router = express.Router(),
    tipControllers = require('../controllers/tip');


router.get('/', tipControllers.findAllTips);

module.exports = router;
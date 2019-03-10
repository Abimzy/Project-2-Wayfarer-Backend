const
    express = require('express');
    router = express.Router(),
    tipControllers = require('../controllers/tip');
    jwt = require('jsonwebtoken');
    verifyToken = require('../utils/utils');

    router.get('/', tipControllers.findAllTips);
    router.get('/:city', tipControllers.findTipsByCity);
    
    // protected routes
    router.post('/', verifyToken ,tipControllers.postTip);
    router.delete('/:tipId', verifyToken, tipControllers.deleteTip);
    router.put('/:data', verifyToken, tipControllers.updateTip);
    

module.exports = router;
const
    express = require('express');
    router = express.Router(),
    tipControllers = require('../controllers/tip');
    jwt = require('jsonwebtoken');
    verifyToken = require('../utils/utils');

    router.get('/', tipControllers.findAllTips);
    router.get('/:city', tipControllers.findTipsByCity);
<<<<<<< HEAD
    
    // protected routes
    router.post('/', verifyToken ,tipControllers.postTip);
    router.delete('/:tipId', verifyToken, tipControllers.deleteTip);
    router.put('/:data', verifyToken, tipControllers.updateTip);
    
=======

    router.post('/', tipControllers.postTip);
    router.delete('/:tipId', tipControllers.deleteTip);
    router.put('/:data', tipControllers.updateTip);





    router.use((req, res, next) => {
        console.log('activated')
        const bearerHeader = req.headers['authorization'];
        console.log('triggered token check', bearerHeader)
    
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            let verified = jwt.verify(req.token, 'cantaloupe');
            console.log('here is the verified', verified)
            req.userId = verified._id
            next(); 
        } else {
            res.sendStatus(403);
        }
    })


 

>>>>>>> 5002273a1b9d9b48ad4cabb953821af833e8d760

module.exports = router;
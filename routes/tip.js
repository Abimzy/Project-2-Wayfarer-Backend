const
    express = require('express');
    router = express.Router(),
    tipControllers = require('../controllers/tip');


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
    

router.get('/', tipControllers.findAllTips);

module.exports = router;
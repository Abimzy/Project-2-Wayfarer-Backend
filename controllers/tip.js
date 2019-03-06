db = require('../models');

module.exports = {
    findAllTips: (req, res) =>{
       db.Tip.find({}, (err, tips) =>{
         res.json({tips});
       })
    }
}
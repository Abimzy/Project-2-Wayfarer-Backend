db = require('../models');

module.exports = {
    findAllTips: (req, res) =>{
       db.Tip.find({}, (err, tips) =>{
         res.json({tips});
       })
    },
    postTip: (req, res) =>{
      db.User.findOne({email: req.body.email}, (err, user)=>{
        if (err) {
         res.json({err: err, message: 'no dice!!!'})
        } else {

          let newTip = new db.Tip({
            img: req.body.img,
            city: req.body.city,
            text: req.body.text,
            title: req.body.title,
            author: user._id
          });
           newTip.save();
        }
      });
    }
}
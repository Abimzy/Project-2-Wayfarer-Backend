db = require('../models');
jwt = require('jsonwebtoken');

module.exports = {
    findAllTips: (req, res) =>{
       db.Tip.find({}, (err, tips) =>{
         res.json({tips});
       })
    },
    findCity: (req, res) =>{

    },
    postTip: (req, res) =>{
      db.User.findOne({}, (err, user)=>{
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

           newTip.save(() =>{
            res.json(newTip);
           });

        }
      });
    },
    updateTip: (req, res)=> {
      db.Tip.findOneAndUpdate({_id:req.body.tipId}, (err, tip)=>{
        if (err) {
         res.json({err: err, message: 'no dice!!!'})
        } else {
       
            tip.img = req.body.img,
            tip.city = req.body.city
            tip.text = req.body.text
            tip.title = req.body.title

           tip.save((err, updatedTip) =>{
            res.json(updatedTip);
           });

        }
      });
    },
    deleteTip: (req, res) => {
      db.Tip.findOneAndDelete({_id: req.params.tipId}, (err, tip)=>{
        if (err) {
         res.json({err: err, message: 'Tip not deleted!!'});
        } else {
          if (!tip) {
            res.json({message: 'cant find the tip!!!'}) 
          } else {
            tip.save((err, deletedTip) =>{
              res.json({message: 'deleted', tip: deletedTip});
             });
          }
        }
      });
    },
    findTipsByCity: (req, res) => {

      db.Tip.find({city: req.params.city}, (err, tips)=>{
        if (err) {
         res.json({err: err, message: 'Error! Did not find tips!!!'})
        } else {
         res.json(tips);         
        }
      });

    }
}


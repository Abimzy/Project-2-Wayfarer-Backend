db = require('../models');
jwt = require('jsonwebtoken');

module.exports = {
    findAllTips: (req, res) =>{
       db.Tip.find({}, (err, tips) =>{
         res.json({tips});
       })
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
            author: req.body.author
          });

           newTip.save(() =>{
            res.json(newTip);
           });

        }
      });
    },
    updateTip: (req, res)=> {

      let data = JSON.parse(req.params.data);


      db.Tip.findById(data.tipId, (err, tip)=>{
        if (err) {
          console.log('erroorrrrrr')
         res.json({err: err, message: 'no dice!!!'})
        } else {
          

            // tip.img = req.body.img
            // tip.city = req.body.city
            // tip.title = req.body.title
            tip.text = data.text;

            tip.save((err)=>{
              if(err) {
                return console.log(err);
              }
              res.json(tip);
            });
            
            
        }
      })
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


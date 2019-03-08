const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/jwt-auth", {
  useNewUrlParser: true
});

module.exports = {User: require('./User'), 
                  Tip: require('./Tip')
                
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const tipRoutes = require('./routes/tip');
const cors=  require ('cors');

// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.use('/user', userRoutes);
app.use('/api/tip', tipRoutes);

<<<<<<< HEAD


app.listen(3000 || process.env.PORT, () => console.log("Listening on PORT"))
=======
app.listen(process.env.PORT, () => console.log("Listening on PORT"))
>>>>>>> b29f65ce523e0897a7b87bed5f109c65a8dc5201
 

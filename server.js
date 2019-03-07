const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const tipRoutes = require('./routes/tip')
const cors = require('cors');


// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.use('/user', userRoutes);

app.use('/api/tip', tipRoutes);


app.listen(3001, () => console.log("Listening on 3001"))
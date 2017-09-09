var config = require('./config.json');
var app = require('express')();
var bodyParser = require('body-parser')
var mailer = require('express-mailer');
var logStatus = require('./logger');
mailer.extend(app, config);

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.use(bodyParser.json())

app.post('/confirmation', (req, res) => {
  var data = req.body;
  var options = { to: data['to'], subject: "Email confirm", name: data['name'], link: data['link'] }
  // app.mailer.send('confirm', options, (error) => logStatus(options, error));
  res.type('application/json');
  res.send({attempted: true});
});

app.listen(3000, () => {
  console.log('Email service listening on port 3000!');
})

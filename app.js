const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PullRequest = require('./models/pull_request');


// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://new_user:61Ab0dG7iQTwG1GG@cluster0.xbrui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/pull_requests');
});

// pull requests routes
app.get('/pull_requests', (req, res) => {
  PullRequest.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { pull_requests: result, title: 'All Pull Requests' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/gitPostRequest', (req, res) => {
  const pr = new PullRequest(req.body);
  pr.save()
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/pull_requests/:id', (req, res) => {
  const id = req.params.id;
  PullRequest.findById(id)
    .then(result => {
      res.render('details', { title: 'Pull Request Details' ,pull_request: result});
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete('/pull_requests/:id', (req, res) => {
  const id = req.params.id;
  PullRequest.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/pull_requests' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

const express = require('express');
const mongo = require('../database/mongoHelpers');
const bodyParser = require('body-parser');


const app = express()
const port = 3100
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/core', function (req, res, next) {
  //Query Database
  mongo.getCoreExercises()
    .then(function (data) {
      // handle data
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
});

app.get('/full', function (req, res, next) {
  //Query Database
  mongo.getFullExercises()
    .then(function (data) {
      // handle data
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
});




app.get('/workout/:name', function (req, res, next) {
  //Query Database
  let object = req.params;
  console.log(req.params, 'req.params inside server');
  mongo.getWorkout(object)
    .then(function (data) {
      // handle data
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
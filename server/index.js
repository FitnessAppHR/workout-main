const express = require('express');
const mongo = require('../database/mongoHelpers');


const app = express()
const port = 3100

app.get('/', (req, res) => res.send('Hello World!'))



app.get('/core', function (req, res, next) {
  //Query Database
  mongo.getCoreExercises()
    .then(function (data) {
      // handle data
      return makeCsv(data)
    })
    .then(function (csv) {
      // handle csv
    })
    .catch(next)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
const db = require('./index.js');

const mongoHelpers = {

  getCoreExercises: () => (db.findOne()),


}


module.exports = mongoHelpers;
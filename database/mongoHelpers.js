const db = require('./index.js');

const mongoHelpers = {

  getCoreExercises: () => (db.find({'muscleGroup': 'Core'})),

  getUpperExercises: () => (db.find({'muscleGroup': 'Upper Body'})),

  getLowerExercises: () => (db.find({'muscleGroup': 'Lower Body'})),

  getFullExercises: () => (db.find({'muscleGroup': 'Full Body'})),

  postWorkout: (obj) => (db.create(obj)),

  getWorkout: (obj) => (db.findOne(obj)),

}


module.exports = mongoHelpers;
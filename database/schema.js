const mongoose = require('mongoose');


var WorkoutSchema = new mongoose.Schema({
  image: String,
  name: String,
  duration: Number,
  calories: Number,
  intensity: String,
  equipment: String,
  goodFor: Array,
  muscleGroup: String,
  workoutType: String,
  level: String,
  exercises: Array

});

module.exports = WorkoutSchema;

/*
  id: 3,
  img: 'url'
  name: 'Core Crush',
  duration: 10,
  calories: 225,
  equipment: 'Basic',
  equipmentList: ['open space', 'dumbbells'],
  goodFor: ['quick burn', 'core']
  muscleGroup: 'Core',
  workoutType: 'Strength',
  intensity: 'Beginner',
  exercises: [
    {
      name: 'Sit ups'
      img: 's3.AWS.com/image1'
    },
    {
       name: 'Pull ups'
      img: 's3.AWS.com/image2'
    },
    {
      name: 'Burpies'
      img: 's3.AWS.com/image3'
    },
    {
       name: 'Push ups'
      img: 's3.AWS.com/image4'
    },
  ]



*/
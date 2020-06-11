const mongo = require('./mongoHelpers')

let coreNameArray = ['Quick Finisher', 'Ab Burner 2.0', 'Core Crush', 'Straight Up Abs', 'Core Burn Out', 'Core Crunch 2.0', 'Quick-Hit Abs', 'Core Circuit', 'Core Countdown', 'Ab Rocket', 'Full Core Press', 'Super Twister', 'Ultimate Core Combo', 'Ab Blaster'];
let upperBodyNameArray = ['Bis and Tris', 'Push and Pull', 'Upper Body Express', 'Tank Top Arms', 'Shoulder Shaper', 'Boxer Buff', 'Smokin Shoulders', 'Fluid Strength', 'Active Arms', 'Atlas Amplified', 'Pec Deck', 'Beef Castle', 'Shoulder and Core'];
let lowerBodyNameArray = ['Glutes and Glory', 'Better Butt', 'Jump Start', 'Leaner Legs', 'Hip Strength', 'Quad Toner', 'Quad God', 'All Out Legs', 'Backside Burner', 'Leg Max Out', 'Lower Body HIT', 'Leg Power Up'];
let fullBodyNameArray = ['Runner Warm Up', 'Core Control', 'Activation Station', 'Basic Burner', 'HIT Circuit', 'Full Body Burn', 'Back to Basics', 'Bootcamp Body', 'Calorie Burner', 'Body Benchmark', 'Fit Finisher', 'At the Limit'];
// let duration = (exercises.length * 2);
// let calories = (exercises.length * 15);
let intensityArray = ['Easy', 'Moderate', 'Hard'];
let equipmentArray = ['None', 'Basic', 'Full'];
let goodForArray = ['Quick Burn', 'Cardio', 'Overall Fitness', 'Strength', 'Mobility', 'Endurance', 'Conditioning', 'Upper Body Strength', 'Core Stability'];

let muscleGroupArray = ['Core', 'Upper Body', 'Lower Body', 'Full Body'];
let workoutTypeArray = ['Strength', 'Cardio', 'Endurance', 'Mobility'];
let levelArray = ['Beginner', 'Intermediate', 'Advanced'];
let coreImages = ['https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader1.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader3.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader8.jpg'];
let lowerImages = ['https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader2.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader4.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeade11.jpg'];
let upperImages = ['https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader2.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader4.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeade11.jpg'];
let fullImages = ['https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader1.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader6.jpg', 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader8.jpg'];

let coreExercisesArray = [
  {
    name: 'Sit ups',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png'
  },
  {
    name: 'Planks',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png'
  },
  {
    name: 'Sit Up Twist',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png'
  },
  {
    name: 'Reverse Crunch',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png'
  },
  {
    name: 'Plank Leg Lifts',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png'
  },
  {
    name: 'Side Plank',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise2.png'
  },
  {
    name: 'Hip Lifts',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png'
  },
  {
    name: 'Pendulum Legs',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png'
  },
  {
    name: 'Mountain Climbers',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png'
  },
  {
    name: 'Ab Roller',
    equipment: 'Ab Roller',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png'
  }
];

let upperBodyExercisesArray = [
  {
    name: 'Push ups',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png'
  },
  {
    name: 'Pull Ups',
    equipment: 'Pull Up Bar',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise2.png'
  },
  {
    name: 'Chin Ups',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png'
  },
  {
    name: 'Dips On Bench',
    equipment: 'Bench',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png'
  },
  {
    name: 'Side Arm Rows',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png'
  },
  {
    name: 'Dumbbell Chest Press',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png'
  },
  {
    name: 'Dumbbell Flys',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png'
  },
  {
    name: 'Bicep Curls',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise2.png'
  },
  {
    name: 'Hammer Curls',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png'
  },
  {
    name: 'Hand Stands Holds',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png'
  },
  {
    name: 'Bicep Curls',
    equipment: 'Pull Up Bar',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png'
  },
  {
    name: 'Bench Press',
    equipment: 'Bench Press',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png'
  }
];

let lowerBodyExercisesArray = [
  {
    name: 'Bodyweight Squats',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png'
  },
  {
    name: 'Jump Squats',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise2.png'
  },
  {
    name: 'Lunges',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png'
  },
  {
    name: 'Crossback Lunges',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png'
  },
  {
    name: 'Split Jumps',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png'
  },
  {
    name: 'Lateral Duck Walk',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png'
  },
  {
    name: 'Dumbbell Deadlifts',
    equipment: 'Dumbbells',
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png'
  },
  {
    name: 'High Kicks',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise2.png'
  },
  {
    name: 'Side Lunges',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png'
  },
  {
    name: 'Hamstring Stretch',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png'
  },
  {
    name: 'Squat Hold',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png'
  },
  {
    name: 'Burpees',
    equipment: null,
    img: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png'
  }
];


let coreWorkoutGenerator = () => {
  let obj = {};

  obj.name = coreNameArray[(Math.floor(Math.random() * (coreNameArray.length - 1)))];
  obj.exercises = coreExerciseGenerator();
  obj.image = coreImages[(Math.floor(Math.random() * (coreImages.length - 1)))];
  obj.duration = (obj.exercises.length * 2);
  obj.calories = (obj.exercises.length * 15);
  obj.intensity = intensityArray[(Math.floor(Math.random() * (intensityArray.length - 1)))];
  obj.equipment = equipmentArray[(Math.floor(Math.random() * (equipmentArray.length - 1)))];
  obj.goodFor = goodForArray[(Math.floor(Math.random() * (goodForArray.length - 1)))];
  obj.muscleGroup = 'Core';
  obj.workoutType = workoutTypeArray[(Math.floor(Math.random() * (workoutTypeArray.length - 1)))];
  obj.level = levelArray[(Math.floor(Math.random() * (levelArray.length - 1)))];

  return obj;
};

// Outputs array for Core workout obj.exercises
let coreExerciseGenerator = () => {
  let exercises = [];
  let randomNumber = Math.floor((Math.random() * 6) + 8);
  for (let i = 0; i < randomNumber; i++){
    exercises.push(coreExercisesArray[Math.floor(Math.random() * (coreExercisesArray.length - 1))]);
  }
  return exercises;
};

let lowerBodyWorkoutGenerator = () => {
  let obj = {};

  obj.name = lowerBodyNameArray[(Math.floor(Math.random() * (lowerBodyNameArray.length - 1)))];
  obj.exercises = lowerBodyExerciseGenerator();
  obj.image = lowerImages[(Math.floor(Math.random() * (lowerImages.length - 1)))];
  obj.duration = (obj.exercises.length * 2);
  obj.calories = (obj.exercises.length * 15);
  obj.intensity = intensityArray[(Math.floor(Math.random() * (intensityArray.length - 1)))];
  obj.equipment = equipmentArray[(Math.floor(Math.random() * (equipmentArray.length - 1)))];
  obj.goodFor = goodForArray[(Math.floor(Math.random() * (goodForArray.length - 1)))];
  obj.muscleGroup = 'Lower Body';
  obj.workoutType = workoutTypeArray[(Math.floor(Math.random() * (workoutTypeArray.length - 1)))];
  obj.level = levelArray[(Math.floor(Math.random() * (levelArray.length - 1)))];

  return obj;
};


let lowerBodyExerciseGenerator = () => {
  let exercises = [];
  let randomNumber = Math.floor((Math.random() * 6) + 8);
  for (let i = 0; i < randomNumber; i++){
    exercises.push(lowerBodyExercisesArray[Math.floor(Math.random() * (lowerBodyExercisesArray.length - 1))]);
  }
  return exercises;
};


let upperBodyWorkoutGenerator = () => {
  let obj = {};

  obj.name = upperBodyNameArray[(Math.floor(Math.random() * (upperBodyNameArray.length - 1)))];
  obj.exercises = upperBodyExerciseGenerator();
  obj.image = upperImages[(Math.floor(Math.random() * (upperImages.length - 1)))];
  obj.duration = (obj.exercises.length * 2);
  obj.calories = (obj.exercises.length * 15);
  obj.intensity = intensityArray[(Math.floor(Math.random() * (intensityArray.length - 1)))];
  obj.equipment = equipmentArray[(Math.floor(Math.random() * (equipmentArray.length - 1)))];
  obj.goodFor = goodForArray[(Math.floor(Math.random() * (goodForArray.length - 1)))];
  obj.muscleGroup = 'Upper Body';
  obj.workoutType = workoutTypeArray[(Math.floor(Math.random() * (workoutTypeArray.length - 1)))];
  obj.level = levelArray[(Math.floor(Math.random() * (levelArray.length - 1)))];

  return obj;
};


let upperBodyExerciseGenerator = () => {
  let exercises = [];
  let randomNumber = Math.floor((Math.random() * 6) + 8);
  for (let i = 0; i < randomNumber; i++){
    exercises.push(upperBodyExercisesArray[Math.floor(Math.random() * (upperBodyExercisesArray.length - 1))]);
  }
  return exercises;
};

let fullBodyWorkoutGenerator = () => {
  let obj = {};

  obj.name = fullBodyNameArray[(Math.floor(Math.random() * (fullBodyNameArray.length - 1)))];
  obj.exercises = fullBodyExerciseGenerator();
  obj.image = fullImages[(Math.floor(Math.random() * (fullImages.length - 1)))];
  obj.duration = (obj.exercises.length * 2);
  obj.calories = (obj.exercises.length * 15);
  obj.intensity = intensityArray[(Math.floor(Math.random() * (intensityArray.length - 1)))];
  obj.equipment = equipmentArray[(Math.floor(Math.random() * (equipmentArray.length - 1)))];
  obj.goodFor = goodForArray[(Math.floor(Math.random() * (goodForArray.length - 1)))];
  obj.muscleGroup = 'Full Body';
  obj.workoutType = workoutTypeArray[(Math.floor(Math.random() * (workoutTypeArray.length - 1)))];
  obj.level = levelArray[(Math.floor(Math.random() * (levelArray.length - 1)))];

  return obj;
};


let fullBodyExerciseGenerator = () => {
  let exercises = [];
  let randomNumber1 = Math.floor((Math.random() * 2) + 4);
  for (let i = 0; i < randomNumber1; i++){
    exercises.push(upperBodyExercisesArray[Math.floor(Math.random() * (upperBodyExercisesArray.length - 1))]);
  }

  let randomNumber2 = Math.floor((Math.random() * 2) + 4);
  for (let i = 0; i < randomNumber2; i++){
    exercises.push(lowerBodyExercisesArray[Math.floor(Math.random() * (lowerBodyExercisesArray.length - 1))]);
  }

  let randomNumber3 = Math.floor((Math.random() * 2) + 4);
  for (let i = 0; i < randomNumber3; i++){
    exercises.push(coreExercisesArray[Math.floor(Math.random() * (coreExercisesArray.length - 1))]);
  }

  return exercises;
};


let workoutsGenerator = (n) => {
  let workouts = [];
  for ( let i = 0; i < n; i++){
    workouts.push(fullBodyWorkoutGenerator())
    workouts.push(upperBodyWorkoutGenerator())
    workouts.push(lowerBodyWorkoutGenerator())
    workouts.push(coreWorkoutGenerator())

  }
  console.log(workouts[1].exercises);
  return workouts;
}

//This will produce 4 * n workouts
let seedDB = (n) => {
  let workoutsArray = workoutsGenerator(n)

  workoutsArray.map( (workout) => {
    // Post to Database using mongo helpers
    mongo.postWorkout(workout)
      .then( () => console.log('Seeded MongoDB'))
      .catch( err => console.error(err))
  })
}

//This will produce 4 * n workouts
seedDB(15);
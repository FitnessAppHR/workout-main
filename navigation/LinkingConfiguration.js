import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Workouts: {
          Core: 'Core',
          WorkoutBox: 'WorkoutBox',
          WorkoutSummary: 'WorkoutSummary',
        },
        Profile: 'profile',
      },
    },
  },
};

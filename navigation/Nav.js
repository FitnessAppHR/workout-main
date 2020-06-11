import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Core from '../screens/Workouts/Core';
import FullBody from '../screens/Workouts/FullBody';
import WorkoutBox from '../screens/Workouts/WorkoutBox';
import WorkoutSummary from '../screens/Workouts/WorkoutSummary';




const Stack = createStackNavigator();


export default function WorkoutNav() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Core" component={Core} />
        <Stack.Screen name="FullBody" component={FullBody} />
        <Stack.Screen name="WorkoutBox" component={WorkoutBox} />
        <Stack.Screen name="WorkoutSummary" component={WorkoutSummary} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
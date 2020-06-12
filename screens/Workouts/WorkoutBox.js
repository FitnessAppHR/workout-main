import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import WorkoutSummary from './WorkoutSummary';



export default function Workout(props) {
  return (

    <View style={styles.box} >
        <Image source={{ uri: props.workout.image }}
          style={styles.thumbnail} />
        <Text style={styles.durationText}>{props.workout.duration}</Text>
        <Text style={styles.minutes}> Minutes </Text>
      <View style={styles.textBlock}>
        <Text style={styles.textTitle} >{props.workout.name}</Text>
        <Text style={styles.textSub}>{props.workout.calories} Calories - {props.workout.intensity} - {props.workout.workoutType}</Text>
      </View>
    </View>
  )

}



const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 400,
    height: 100,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    backgroundColor: '#fff',

  },
  thumbnail: {
    height: 99,
    width: 99,
  },
  textBlock: {
    position: 'absolute',
    top: 26,
    left: 150,
  },
  textTitle: {
    position: 'relative',
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'left',

  },
  textSub: {
    position: 'relative',
    fontFamily: 'Arial',
    textAlign: 'left',
  },
  durationText: {
    position: 'absolute',
    top: 24,
    left: 32,
    fontWeight: '900',
    fontSize: 24,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  minutes: {
    position: 'absolute',
    top: 50,
    left: 15,
    fontWeight: '900',
    fontSize: 16,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});

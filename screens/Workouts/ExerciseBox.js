import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WorkoutSummary from './WorkoutSummary';



export default function ExerciseBox(props) {
  return (

    <View style={styles.box} >
      <Image source={{ uri: props.exercise.img }} style={styles.thumbnail} />
      <View style={styles.textBlock}>
        <Text style={styles.textTitle} >{props.exercise.name}</Text>
        <Text style={styles.textSub}>{props.exercise.equipment}</Text>
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
    textAlign: 'center',

  },
  textSub: {
    position: 'relative',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});

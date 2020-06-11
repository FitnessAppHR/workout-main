import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ExerciseBox from './ExerciseBox';



export default class WorkoutSummary extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      workout: exampleData,
      timer: false,
    };
    this.getWorkout = this.getWorkout.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  componentDidMount(){
    this.getWorkout();
  }

  startTimer(){
    let counter = 0;
    setInterval(() => {
      counter++;
      var remain = counter;
      var hours = Math.floor(remain / 3600);
      remain -= hours * 3600;
      var mins = Math.floor(remain / 60);
      remain -= mins * 60;
      var secs = remain;

      // Update the display timer
      if (hours < 10) { hours = "0" + hours; }
      if (mins < 10) { mins = "0" + mins; }
      if (secs < 10) { secs = "0" + secs; }
      if (this.state.savedTime){
        let currentTime = this.state.savedTime;
        this.setState({
          time: currentTime,
          // timer: true,
        })
      } else {
        let currentTime = hours + ":" + mins + ":" + secs;
        this.setState({
          time: currentTime,
          timer: true,
        })
      }
    },1000)
  }

  pauseTimer(){
    this.setState({
      savedTime: this.state.time,
    })
    clearInterval()
    this.setState({
      timer: false,
    }, ()=>{console.log(this.state)})
  }

  getWorkout(){
    // This is where you would pass in the exercise name from navigation prop of what exercise is clicked
    let name = 'Core Countdown'
    axios.get(`http://localhost:3100/workout/${name}`)
    .then( (results) => {
      this.setState({
        workout: results.data
      })
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <View style={styles.page}>
        <ScrollView>
          <Image source={{ uri: this.state.workout.image }}
            style={styles.headerImage} />
          <Text style={styles.headerText}> {this.state.workout.name}</Text>
          {this.state.timer?
          <Button title="Stop" onPress={this.pauseTimer}></Button>
          :<Button title="Start" onPress={this.startTimer}></Button>}
          <View style={styles.subText}>
            <Text style={styles.subText}>{this.state.workout.intensity} | {this.state.workout.level} | {this.state.workout.duration} Minutes</Text>
          </View>
          <Text>{this.state.time}</Text>
          {this.state.workout.exercises.map((exercise, index) => {
              return (
                  <ExerciseBox key={index} exercise={exercise} />
              )
            })}
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  headerImage: {
    width: 400,
    height: 400,
  },
  headerText: {
    position: 'absolute',
    top: 80,
    left: 120,
    fontSize: 30,
    fontWeight: '900',
  },
  subText: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 18,
    height: 30,
    borderTopColor: '#808080',
    borderBottomColor: '#808080',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'yellow',
  }

});

let exampleData = {
	"_id" : 'ObjectId("5ee15236facb2d28d8be6c59")',
	"goodFor" : [
		"Endurance"
	],
	"exercises" : [
		{
			"name" : "Dumbbell Deadlifts",
			"equipment" : "Dumbbells",
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png"
		},
		{
			"name" : "Lunges",
			"equipment" : null,
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png"
		},
		{
			"name" : "Hamstring Stretch",
			"equipment" : null,
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise4.png"
		},
		{
			"name" : "Dumbbell Deadlifts",
			"equipment" : "Dumbbells",
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png"
		},
		{
			"name" : "Side Lunges",
			"equipment" : null,
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise3.png"
		},
		{
			"name" : "Squat Hold",
			"equipment" : null,
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise5.png"
		},
		{
			"name" : "Lateral Duck Walk",
			"equipment" : null,
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise6.png"
		},
		{
			"name" : "Bodyweight Squats",
			"equipment" : null,
			"img" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/exercise1.png"
		}
	],
	"name" : "Quad Toner",
	"image" : "https://mvp-hrla36.s3-us-west-1.amazonaws.com/WorkoutHeader4.jpg",
	"duration" : 16,
	"calories" : 120,
	"intensity" : "Easy",
	"equipment" : "None",
	"muscleGroup" : "Lower Body",
	"workoutType" : "Endurance",
	"level" : "Beginner",
  "__v" : 0,
}

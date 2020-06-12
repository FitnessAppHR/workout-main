import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class WorkoutHome extends React.Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.block}>
          <Image style={styles.image} source={{ uri: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/coreHeader.jpg' }} onPress={() => this.props.navigation.navigate('Core')}/>
          <Text style={styles.headerText}>CORE & ABS</Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.image} source={{ uri: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/fullBodyHeader.jpg' }} />
          <Text style={styles.fullText}>FULL BODY</Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.image} source={{ uri: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/lowerHeader.jpg' }} />
          <Text style={styles.lowerText}>LOWER BODY</Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.image} source={{ uri: 'https://mvp-hrla36.s3-us-west-1.amazonaws.com/upperHeader.jpg' }} />
          <Text style={styles.upperText}>UPPER BODY</Text>
          </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 30,
  },
  image: {
    height: 400,
    width: 420,
  },
  headerText: {
    position: 'absolute',
    top: 300,
    left: 65,
    color: 'black',
    fontWeight: '900',
    fontSize: 48,
 },
 fullText: {
    position: 'absolute',
    top: 300,
    left: 75,
    color: 'black',
    fontWeight: '900',
    fontSize: 48,
  },
 upperText: {
    position: 'absolute',
    top: 300,
    left: 65,
    color: 'white',
    fontWeight: '900',
    fontSize: 48,
  },
 lowerText: {
    position: 'absolute',
    top: 300,
    left: 50,
    color: 'white',
    fontWeight: '900',
    fontSize: 48,
  },

})
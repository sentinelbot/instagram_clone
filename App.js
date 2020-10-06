import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import { View, Text } from "react-native";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7iLj9rpx_uZVgvRGuJfQ1vdBglWe4Ouw",
  authDomain: "instagram-clone-54bf5.firebaseapp.com",
  databaseURL: "https://instagram-clone-54bf5.firebaseio.com",
  projectId: "instagram-clone-54bf5",
  storageBucket: "instagram-clone-54bf5.appspot.com",
  messagingSenderId: "858098242498",
  appId: "1:858098242498:web:efa79e962ea4a2520cfc5b",
  measurementId: "G-3HQK40Z5X8",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//components
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              option={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Logged Success. </Text>
      </View>
    );
  }
}

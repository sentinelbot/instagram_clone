import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import * as firebase from "firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="sign up" onPress={() => onSignUp()} />
    </View>
  );
}

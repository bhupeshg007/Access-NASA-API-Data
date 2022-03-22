import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RandomAsteroidScreen = ({ navigation }) => {
  const [AsteroidId, setAsteroidId] = useState();

  useEffect(()=>{
    
  })
 
  useApi = () => {
    setAsteroidId();
  };


  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Asteroid ID"
            keyboardType="numeric"
            value={AsteroidId}
            onChangeText={(text) => setAsteroidId(text)}
            
          />

          <TouchableOpacity
            style={styles.btnRandomAsteroid}
            onPress={() =>
             { navigation.navigate("Submit", {
                Id: AsteroidId,
              }),useApi()
            }}
          >
            <Text style={styles.btnTextRandomAsteroid}>Random Asteroid</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingTop: 200,
    padding: 50,
    flex: 1,
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },

  btnRandomAsteroid: {
    backgroundColor: "#22577E",
    width: 200,
    padding: 10,
    margin: 10,
    marginLeft: 30,
    borderRadius: 20,
  },
  btnTextRandomAsteroid: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

export default RandomAsteroidScreen;

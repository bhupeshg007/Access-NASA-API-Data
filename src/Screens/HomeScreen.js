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

const IdProps = ({ navigation }) => {
  const [textInput, onChangetextInput] = useState(true);
  const [color, changeColor] = useState("#D3DEDC");
  const [AsteroidId, setAsteroidId] = useState();

  useEffect(() => {});

  useApi = () => {
    setAsteroidId();
    changeColor("#D3DEDC");
    onChangetextInput(true);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput
            placeholder="Enter Asteroid ID"
            style={styles.textInput}
            keyboardType="numeric"
            value={AsteroidId}
            onChangeText={(text) => {
              setAsteroidId(text),
                onChangetextInput(false),
                changeColor("#22577E");
            }}
          />
          <TouchableOpacity
            style={[styles.btnSubmit, { backgroundColor: color }]}
            disabled={textInput}
            onPress={() => {
              navigation.navigate("Submit", {
                Id: AsteroidId,
              }),
                useApi();
            }}
          >
            <Text style={styles.btnTextSubmit}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRandomAsteroid}
            onPress={() => {
              navigation.navigate("RandomAsteroid"), useApi();
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
  btnSubmit: {
    width: 150,
    padding: 10,
    margin: 10,
    marginLeft: 50,
    borderRadius: 20,
  },
  btnTextSubmit: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 30,
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

export default IdProps;

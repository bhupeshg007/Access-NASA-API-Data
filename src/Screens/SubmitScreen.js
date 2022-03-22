import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";

const SubmitScreen = ({ route, navigation }) => {
  const [data, setData] = useState("");
  const { Id } = route.params;

  useEffect(() => {
    ApiCall();
    async function ApiCall() {
      try {
        const resp = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${Id}?api_key=<Your_Api_key>`
        );
        setData(resp.data);
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <View style={styles.innercontainer}>
          <View style={styles.box1}>
            <Text style={styles.Heading}>NAME </Text>
            <Text style={styles.Heading}>NASA JPL URL </Text>
            <Text style={styles.Heading}>
              IS POTENTIALLY HAZARDOUS ASTEROID
            </Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text}>: {data.name}</Text>
            <Text style={styles.text}>: {data.nasa_jpl_url}</Text>
            <Text style={styles.text}>
              : {JSON.stringify(data.is_potentially_hazardous_asteroid)}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color="black"
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3E4DB",
  },
  innercontainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  box1: {
    flex: 1,
    justifyContent: "center",
  },
  Heading: {
    paddingVertical: 15,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
  },
  box2: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    paddingVertical: 15,
    textAlign: "left",
    fontSize: 15,
  },
  activityIndicator: {
    backgroundColor: "white",
    height: 45,
    width: 45,
    borderRadius: 50,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 20,
  },
});

export default SubmitScreen;

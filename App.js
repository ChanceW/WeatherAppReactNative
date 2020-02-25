import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import  getWeather  from "./Weatherfetcher.js";
import  WeatherReport  from "./WeatherReport";



export default function App() {
  let [city, setCity] = useState("");
  let [report, setReport] = useState(null);

  const fetchWeather = () => {
    getWeather(city).then((report) => {
      setReport(report);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
          style={{height: 40}}
          placeholder="Enter City"
          onChangeText={(text) => {setCity(text)}}
          value={city}
        />
      <Button
        onPress={fetchWeather}
        title="Get Weather"
      />
      {report ? <WeatherReport report={report} /> : null} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:100,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
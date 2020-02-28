import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './logo/wku.jpg'

export default function App() {
  return (
      <View style={styles.container}>
        <Image source = {logo} style = {styles.logo} />

        <TouchableOpacity
            onPress = {() => alert('Information Here')}
            style = {styles.button}>
          <Text style = {styles.buttonText}> Check Diddle North </Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
import React, { useState } from 'react';
import { Button, Text, View, TextInput, Switch, StyleSheet } from 'react-native';

const App = () => {
  const [isFloat, setIsFloat] = useState(false);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = Math.ceil(isFloat ? parseFloat(minValue) : parseInt(minValue));
    const max = Math.floor(isFloat ? parseFloat(maxValue) : parseInt(maxValue));
    const randomNum = Math.random() * (max - min + 1) + min;
    setRandomNumber(isFloat ? randomNum.toFixed(2) : Math.floor(randomNum));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Min Value:</Text>
      <TextInput style={styles.input} onChangeText={text => setMinValue(text)} value={minValue} keyboardType="numeric" />
      <Text style={styles.label}>Max Value:</Text>
      <TextInput style={styles.input} onChangeText={text => setMaxValue(text)} value={maxValue} keyboardType="numeric" />
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Float:</Text>
        <Switch onValueChange={() => setIsFloat(!isFloat)} value={isFloat} />
      </View>
      <Button title="Generate Random Number" onPress={generateRandomNumber} />
      {randomNumber && <Text style={styles.result}>Random Number: {randomNumber}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;

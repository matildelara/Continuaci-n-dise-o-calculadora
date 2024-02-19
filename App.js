import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const borrar = (button) => {
    if (button === '=') {
      calculateResult();
    } else if (button === 'C') {
      clearInput();
    } else {
      setInput(input + button);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      if (evalResult === Infinity || isNaN(evalResult)) {
        setResult('Error: Número inválido');
      } else {
        setResult(evalResult.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.operationsContainer}>
        <Text style={styles.operationsText}>{input}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => borrar('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('(')}>
          <Text style={styles.buttonText}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar(')')}>
          <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('*')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => borrar('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={() => borrar('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  operationsContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: windowWidth * 0.96,
  },
  operationsText: {
    color: '#333',
    fontSize: 35,
  },
  resultContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  resultText: {
    color: '#333',
    fontSize: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: windowWidth,
    justifyContent: 'center',
    paddingTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    borderWidth: 1,
    margin: 1,
  },
  zeroButton: {
    width: windowWidth * 0.41,
  },
  equalButton: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: '#333',
    fontSize: 32,
  },
});

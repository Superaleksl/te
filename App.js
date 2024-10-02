import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import button_tictactoe from './button';
import { useEffect } from 'react';

export default function App() {
  const[symbol, setSymbol] = useupdate('x')
  const click = () =>{
      if (symbol == 'x') {
        setSymbol('0')
        console.warn(symbol)
      }
  }

  return (
    <View>
      <View style={{backgroundColor: 'gray', width: '100%', height: '80%'}}>
      <View style={{width: '100%', height: '40%'}}>
      <TouchableOpacity>
      <button_tictactoe id = {0} text = {'x'}/>
    </TouchableOpacity>
    <button_tictactoe id = {0} text = {'0'}/>
    <button_tictactoe id = {0} text = {'x'}/>
      </View>
      </View>
    </View>
  );
};

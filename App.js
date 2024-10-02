import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import button_tictactoe from './button';
import { useEffect, useState } from 'react';

export default function App() {
  let buttons = [[{x:0,y:0}, {x:0,y:1}, {x:0,y:2}],
  [{x:1,y:0}, {x:1,y:1}, {x:1,y:2}],
  [{x:2,y:0}, {x:2,y:1}, {x:2,y:2}]]
  const checkwin = () => {

    if(buttons[0][0][0] && buttons[0][0][1] && buttons[0][0][2] && buttons[0][0][3])
  }
  const[symbol, setSymbol] = useUpdate('x')
  const[player_1, setplayer1_score] = useState(0)
  const[player_2, setplayer2_score] = useState(0)
  const click = () =>{
      if (symbol == 'x') {
        setSymbol('0')
        console.warn(symbol)
      }
      else{
        setSymbol('x')
        console.warn(symbol)
        console.log(symbol)
      }
    
  }
  
  return (
    <View>
      <View style={{backgroundColor: 'gray', width: '100%', height: '80%'}}>
        <Text>
          Счёт: {player1_score} - {player2_score}
        </Text>
      <View style={{width: '100%', height: '40%'}}>
        <TouchableOpacity onPress={click}>
        <button_tictactoe id = {0} text = {symbol}/>
        </TouchableOpacity>
        <button_tictactoe id = {0} text = {symbol}/>
        <button_tictactoe id = {0} text = {symbol}/>
      </View>
      </View>
    </View>
  );
};

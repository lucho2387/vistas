import { Alert, Button, Text, View } from "react-native";
import { Card, NumberContainer } from '../../components'
import React, { useEffect, useRef, useState } from "react";

import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if(randomNumber == exclude){
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

const Game = ({ selectedNumber, onHandleGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
  // Contar la cantidad de rondas
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigth = useRef(100);
  
  useEffect(() => {
    // Si es igual al numero aleatorio termina el juego
    if(currentGuess == selectedNumber) onHandleGameOver(rounds);
  },[currentGuess, selectedNumber, onHandleGameOver]);

  const onHandleNextGuess = (direction) => {
    if(
      direction == 'lower' && currentGuess < selectedNumber || 
      direction == 'greater' && currentGuess > selectedNumber)
      {
        Alert.alert("No mientas!", "Sabes que eso es incorrecto", [
          { text: "Perdon!", style: "cancel"},
        ]);
        return;
      }

      if(direction == 'lower'){
        // Asdignamos el valor random
        currentHigth.current = currentGuess;
      }else {
        currentLow.current = currentGuess;
      }
      const nextNumber = generateRandomNumber(currentLow.current, currentHigth.current, currentGuess);
      setCurrentGuess(nextNumber);
      setRounds((rounds) => rounds + 1);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Numero del Oponente</Text>
        <NumberContainer number={currentGuess}/>
        <View style={styles.containerButton}>
          <Button title="Menor" onPress={() => onHandleNextGuess('lower')} color={colors.colorButtonConfirmar} />
          <Button title="Mayor" onPress={() => onHandleNextGuess('greater')} color={colors.colorButtonIniciar} />
        </View>
      </Card>
    </View>
  );
};

export default Game;
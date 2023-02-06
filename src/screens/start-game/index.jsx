import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useState } from "react";

import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const StartGame = ({ onHandleStarGame }) => {
  const [inputValue, setInputValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectNumber, setSelectNumber] = useState(null);

  const  onHandlerChange = (text) =>{
    setInputValue(text.replace(/[^0-9]/g, ''));
  }

  const onHandlerReset = () =>{
    setInputValue("");
    setConfirmed(false)
  }

  const onHandlerConfirm = () =>{
    const chosenNumber = parseInt(inputValue, 10);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Numero Invalido', 'Ingrese un numero entre el 1 y 99', [{text: 'Entendido', style: 'destructive', onPress: onHandlerReset}])
    }else {
      setConfirmed(true);
      setSelectNumber(chosenNumber);
      setInputValue("");
    }
  }

  const onHandleStartGame = () => {
    onHandleStarGame(selectNumber);
  };
  

  const Confirmed = () => 
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Numero Seleccionado</Text>
        <NumberContainer number={selectNumber}/>
        <Button
          title="Iniciar Juego"
          onPress={onHandleStartGame}
          color={colors.colorButtonIniciar}
        />
      </Card>
    ) : null; 


  return (
      <KeyboardAvoidingView 
        style={styles.containerScroll} 
        behavior={Platform.OS == 'ios' ? "height" : "padding"}>
        <TouchableWithoutFeedback 
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <ScrollView style={styles.containerScroll}>
            <View style={styles.container}>
              <Text style={styles.title}>Iniciar Juego</Text>
                <Card style={styles.inputContainer}>
                  <Text style={styles.title2}>Escribe un numero</Text>
                  <TextInput 
                    value={inputValue}
                    style={styles.input} 
                    keyboardType="numeric" 
                    maxLength={2} 
                    placeholder="0"
                    onChangeText={onHandlerChange}
                  />
                  <View style={styles.buttonContainer}>
                    <Button title="Limpiar" onPress={onHandlerReset} color={colors.colorButtonIniciar}/>
                    <Button title="Confirmar"  onPress={onHandlerConfirm} color={colors.colorButtonConfirmar}/>
                  </View>
                </Card>
              
              <Confirmed />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
};

export default StartGame;

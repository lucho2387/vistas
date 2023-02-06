import { ActivityIndicator, View } from "react-native";
import { Footer, Header } from "./components";
import { Game, GameOver, StartGame } from "./screens";

import { colors } from "./constants/themes/colors";
import { styles } from "./styles";
import { useFonts } from 'expo-font';
import { useState } from "react";

const App = () => {
  const [loaded] = useFonts({
    'Karma-Regular': require('../assets/fonts/Karma-Regular.ttf'),
    'Karma-Bold': require('../assets/fonts/Karma-Bold.ttf'),
    'Karma-Medium': require('../assets/fonts/Karma-Medium.ttf'),
    'Karma-SemiBold': require('../assets/fonts/Karma-SemiBold.ttf'),
    'Karma-Light': require('../assets/fonts/Karma-Light.ttf'),
    'Kanit-Black': require('../assets/fonts/Kanit-Black.ttf'),
    'Kanit-Bold': require('../assets/fonts/Kanit-Bold.ttf'),
  });
  const [userNumber, setUserNuber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const onHandleStarGame = (selectedNumber) => {
    setUserNuber(selectedNumber);
  }

  const onHandleGameOver = (rounds) => {
    setGuessRounds(rounds)
  }

  const onHandleRestartGame = () => {
    setUserNuber(null);
    setGuessRounds(0);
  }

  const Content = () => {
    // Pantalla de Inicio del Juego
    if(userNumber && guessRounds <= 0 ){
      return  <Game selectedNumber={userNumber} onHandleGameOver={onHandleGameOver}/> 
    }

    // Pantalla de Finalizacion
    if(guessRounds > 0 ){
      return  <GameOver onHandleRestartGame={onHandleRestartGame} rounds={guessRounds} selectNumber={userNumber}/>
    }

    // Pantalla de Inicio
    return  <StartGame onHandleStarGame={onHandleStarGame} />
  }

  if(!loaded){
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' color={colors.colorButtonReiniciar}/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero"/>
      <Content />
      <Footer title="Derechos reservados 2023 - Luis Hernan Juarez" />
    </View>
  );
};

export default App;

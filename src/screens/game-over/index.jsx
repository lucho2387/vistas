import { Dimensions, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Button } from '@rneui/themed';
import { Card } from '../../components'
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const GameOver = ({rounds, selectNumber, onHandleRestartGame}) => {
    const [isPortrait, setIsPortrait] = useState(true); 

    const onPotrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    }

    const statePortrait = () => {
      setIsPortrait(onPotrait);
    }

    useEffect(() => {
      const suscription = Dimensions.addEventListener("change", statePortrait);

      return () => {
        suscription.remove();
      }
    });
   
    console.log("isPortrait", isPortrait);
    
    return (
    <View  style={styles.container}>
      <Card style={isPortrait ? styles.content : styles.contentLandscape}>
        <Image 
          style={isPortrait ? styles.image : styles.imageLandscape}
          source={require('../../../assets/images/gameOver.jpg')}
        />
        <View>  
          <Text style={styles.rondas}>Rondas: {rounds}</Text>
          <Text style={styles.numero}>Numero Elegido: {selectNumber}</Text>
        </View>
      </Card>
      <Button 
          title="Reiniciar Juego"
          onPress={onHandleRestartGame}
          color={colors.colorFooter}
      />
    </View>
  );
};

export default GameOver;
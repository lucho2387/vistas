import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
import {fonts} from '../../constants/font/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    width: '62%',
    height: '60%',
    justifyContent: "center",
    alignItems: "center",
    margin: 15  
  },
  image: {
    width: 200,
    height: 200
  },
  rondas: {
    fontSize: 16,
    color: colors.colorButtonIniciar,
    paddingTop: 8,
    fontFamily: fonts.karmaBold
  },
  numero: {
    fontSize: 16,
    color: colors.colorTitle1,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: fonts.karmaBold
  },
  contentLandscape: {
    flex: 1,
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 15
  },
  imageLandscape: {
    margin: 0,
    width: 130,
    height: 130
  }
 
});
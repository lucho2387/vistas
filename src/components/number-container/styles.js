import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorButtonConfirmar,
    borderColor: colors.colorButtonIniciar,
    borderWidth: 2,
    borderRadius: 5,
  },
  numero: {
    color: colors.colorButtonIniciar,
    fontWeight: 'bold',
    fontSize: 18
  },
 
});

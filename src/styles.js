import { StyleSheet } from "react-native";
import { colors } from "./constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.colorBlanco,
    },
    containerLoader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    }
});

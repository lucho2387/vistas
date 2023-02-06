import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { colors } from '../../constants/themes/colors'

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorButtonConfirmar,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.colorBlanco,
  },
});
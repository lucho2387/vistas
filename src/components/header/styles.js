import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";
import { fonts } from '../../constants/font/fonts'

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorHeader,
    height: height * 0.12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.kanitBold,
    color: "#fff",
  },
});

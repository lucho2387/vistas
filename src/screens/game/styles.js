import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    color: colors.colorTitle1,
    fontSize: 18
  },
  containerButton: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: "space-evenly",
  },    
  content: {
    width: '75%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
 
});
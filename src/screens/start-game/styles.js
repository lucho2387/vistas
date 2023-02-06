import { StyleSheet } from "react-native";
import { colors } from '../../constants/themes/colors'
import { fonts } from '../../constants/font/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: colors.colorTitle,
    fontFamily: fonts.karmaSemiBold,
    paddingTop: 5
  },
  title2: {
    fontSize: 17,
    paddingBottom: 5,
    color: colors.colorTitle1,
    fontFamily: fonts.karmaBold,
  },
  inputContainer: {
    width: '75%',
    height: 185,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 15,
  },
  input: {
    padding: 10,
    paddingLeft: 20,
    borderBottomColor: colors.colorCardBorder,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15
  },
  confirmedContainer: {
    width: '75%',
    height: 190,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20
  },
  confirmedTitle: {
    color: colors.colorTitle1,
    fontWeight: 'bold',
    fontSize: 16
  },
});
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    gap: 20,
    borderRadius: 15,
  },
  selectItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectItemCircle: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
  },
  selectItemFilledCircle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'crimson',
  },
  selectItemText: {
    marginLeft: 12,
    fontSize: 18,
  },
});
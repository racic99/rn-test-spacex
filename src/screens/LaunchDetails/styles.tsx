import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  time: {
    color: 'crimson',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: 'crimson',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 15,
  },
  linkButtonText: {
    color: 'white',
    fontSize: 16,
  },
})
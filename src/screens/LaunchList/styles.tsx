import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexGrow: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'crimson',
    fontSize: 20,
    textAlign: 'center',
  },
  emptyListText: {
    fontSize: 20,
    textAlign: 'center',
  },
  rocketFilterSelectButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 12,
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  rocketFilterSelectButtonText: {
    fontSize: 16,
  },
});
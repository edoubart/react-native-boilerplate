// NPM Packages
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  createGoal: {
    alignItems: 'center',
    backgroundColor: '#311b6b',
    flex: 1,
    flexDirection: 'column', // Default
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    height: 100,
    margin: 20,
    width: 100,
  },
  textInput: {
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
    borderRadius: 6,
    borderWidth: 1,
    color: '#120438',
    padding: 16,
    width: '100%',
  },
});

export default styles;

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
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'column', // Default
    justifyContent: 'center',
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    width: '100%',
  },
});

export default styles;

// NPM Packages
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

function Goal(props) {
  return (
    <View style={styles.goal}>
      <Text style={styles.text}>{ props.data.goal.text }</Text>
    </View>
  );
}

export default Goal;

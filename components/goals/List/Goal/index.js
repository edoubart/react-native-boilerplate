// NPM Packages
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

function Goal(props) {
  // Handlers
  function handleDeleteGoal() {
    props.handlers.deleteGoal(props.data.goal.id);
  }

  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={handleDeleteGoal}
        styles={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.text}>{ props.data.goal.text }</Text>
      </Pressable>
    </View>
  );
}

export default Goal;

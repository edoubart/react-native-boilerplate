// NPM Packages
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

// Custom Modules
import Goal from './Goal';

// Styles
import styles from './styles';

function ListGoals(props) {
  // Renderers
  function renderGoal(itemData) {
    return (
      <Goal
        data={{
          goal: itemData.item,
        }}
        handlers={{
          deleteGoal: props.handlers.deleteGoal,
        }}
      />
    );
  }

  return (
    <View style={styles.goals}>
      <FlatList
        alwaysBounceVertical={false}
        data={props.data.goals}
        keyExtractor={(goal, index) => {
          return goal.id;
        }}
        renderItem={renderGoal}
      />
    </View>
  );
}

export default ListGoals;

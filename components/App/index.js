// NPM Packages
import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

// Custom Modules
import {
  CreateGoal,
  ListGoals,
} from './../goals';

// Styles
import styles from './styles';

function App() {
  // State
  const [ goals, setGoals ] = useState([]);
  console.log('goals: ', goals)

  // Handlers
  function handleAddGoal(goal) {
    setGoals([ ...goals, goal ]);
  }

  return (
    <View style={styles.app}>
      <CreateGoal
        handlers={{
          addGoal: handleAddGoal,
        }}
      />
      <ListGoals
        data={{
          goals,
        }}
      />
    </View>
  );
}

export default App;

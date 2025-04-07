// NPM Packages
import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

// Custom Modules
import {
  CreateGoal,
  ListGoals,
} from './../goals';

// Styles
import styles from './styles';

// Constants
const BUTTON_COLOR = '#5e0acc';
const BUTTON_TITLE = "Add New Goal";

function App() {
  // State
  const [ goals, setGoals ] = useState([]);
  console.log('goals: ', goals);
  const [ modalOpened, setModalOpened ] = useState(false);
  console.log('modalOpened: ', modalOpened);

  // Handlers
  function handleAddGoal(goal) {
    setGoals([ ...goals, goal ]);
  }

  function handleDeleteGoal(id) {
    let newGoals = [ ...goals ]
      .filter(goal => goal.id !== id);

    setGoals(newGoals);
  }

  function handleOpenModal() {
    setModalOpened(true);
  }

  return (
    <View style={styles.app}>
      <Button
        color={BUTTON_COLOR}
        onPress={handleOpenModal}
        title={BUTTON_TITLE}
      />
      <CreateGoal
        data={{
          modalOpened,
        }}
        handlers={{
          addGoal: handleAddGoal,
        }}
      />
      <ListGoals
        data={{
          goals,
        }}
        handlers={{
          deleteGoal: handleDeleteGoal,
        }}
      />
    </View>
  );
}

export default App;

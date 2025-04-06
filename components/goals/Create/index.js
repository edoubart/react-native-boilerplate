// NPM Packages
import { useState } from 'react';
import {
  Button,
  TextInput,
  View,
} from 'react-native';

// Styles
import styles from './styles';

// Constants
const BUTTON_TITLE = "Add Goal";
const TEXT_INPUT_PLACEHOLDER = "Your course goal!";

function CreateGoal(props) {
  // State
  const [ goal, setGoal ] = useState(null);
  console.log('goal: ', goal)

  // Handlers
  function handleAddGoal() {
    props.handlers.addGoal(goal);
  }

  function handleChangeGoal(text) {
    setGoal({
      id: Math.random().toString(),
      text,
    });
  }

  return (
    <View style={styles.createGoal}>
      <TextInput
        onChangeText={handleChangeGoal}
        placeholder={TEXT_INPUT_PLACEHOLDER}
        style={styles.textInput}
        value={goal.text}
      />
      <Button
        onPress={handleAddGoal}
        title={BUTTON_TITLE}
      />
    </View>
  );
}

export default CreateGoal;

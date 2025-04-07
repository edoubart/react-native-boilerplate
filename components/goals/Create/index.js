// NPM Packages
import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  TextInput,
  View,
} from 'react-native';

// Styles
import styles from './styles';

// Constants
const BUTTON_ADD_COLOR = '#b180f0';
const BUTTON_ADD_TITLE = "Add Goal";
const BUTTON_CANCEL_COLOR = '#f31282';
const BUTTON_CANCEL_TITLE = "Cancel";
const TEXT_INPUT_PLACEHOLDER = "Your course goal!";

function CreateGoal(props) {
  // State
  const [ goal, setGoal ] = useState({
    id: '',
    text: '',
  });
  console.log('goal: ', goal)

  // Handlers
  function handleAddGoal() {
    setGoal({
      ...goal,
      id: Math.random().toString(),
    });

    if (goal.text) {
      props.handlers.addGoal(goal);
    }
  }

  function handleChangeGoal(text) {
    setGoal({
      ...goal,
      text,
    });
  }

  return (
    <Modal animationType="slide" visible={props.data.modalOpened} >
      <View style={styles.createGoal}>
        <Image
          source={require('./../../../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          onChangeText={handleChangeGoal}
          placeholder={TEXT_INPUT_PLACEHOLDER}
          style={styles.textInput}
          value={goal.text}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              color={BUTTON_CANCEL_COLOR}
              onPress={props.handlers.cancel}
              title={BUTTON_CANCEL_TITLE}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={BUTTON_ADD_COLOR}
              onPress={handleAddGoal}
              title={BUTTON_ADD_TITLE}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CreateGoal;

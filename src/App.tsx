import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {useState} from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

const App = () => {
  const [diceImage, setdiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setdiceImage(DiceOne);
        break;
      case 2:
        setdiceImage(DiceTwo);
        break;
      case 3:
        setdiceImage(DiceThree);
        break;
      case 4:
        setdiceImage(DiceFour);
        break;
      case 5:
        setdiceImage(DiceFive);
        break;
      case 6:
        setdiceImage(DiceSix);
        break;

      default:
        setdiceImage(DiceOne);
        break;
    }
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable style={styles.btn}>
        <Text onPress={rollDice}>Roll Dice</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  diceImage: {
    height: 200,
    width: 200,
  },
  btn: {
    backgroundColor: '#8D6F64',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default App;

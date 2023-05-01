import React from 'react';
import { View, Text } from 'react-native';

const OnboardingScreen01 = () => {
  return (
    <View>
      <View style={styles.stasber}>
        <Text style={styles.time}>10:00</Text>
      </View>
      <View>
        <Text style={styles.tim1e}>10:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stasber: {
    position: absolute,
    width: 349,
    height: 18,
    left: 6,
    top: 11,
  },
});
export default OnboardingScreen01;
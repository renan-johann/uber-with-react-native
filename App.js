import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//set up redux

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Let's build UBER!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

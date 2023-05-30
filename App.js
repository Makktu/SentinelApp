import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='inverted' />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.textStyle}>On Guard</Text>
          {/* <Text style={styles.altTextStyle}>created by John McNamara</Text> */}

          <Text style={styles.startStyle}>Tap To Begin</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E043D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'orangered',
    fontSize: 50,
  },
  altTextStyle: {
    color: 'orangered',
    fontSize: 10,
  },
  startStyle: {
    color: 'whitesmoke',
    fontSize: 30,
    marginVertical: 50,
  },
});

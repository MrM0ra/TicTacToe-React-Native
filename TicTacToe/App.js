import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import react from 'react';

export default function App() {
 
    const [number, setNumber] = react.useState(1)

    const addNumber = () => {
        setNumber(number+1)
    }
    
    const lessNumber = () => {
        setNumber(number-1)
    }

    return (
    <View style={styles.container}>
      <Text style={styles.txtM}>Victor mora's app!</Text>
      <text>The number is: {number}</text>
      <TouchableOpacity style={styles.btnLikePrimary} onPress={addNumber}>
        <Text>
            Add
        </Text>
      </TouchableOpacity>
      <button onClick={addNumber}>Add</button>
      <button onClick={lessNumber}>Take</button>
      <TouchableOpacity style={styles.btnLikeSecondary} onPress={lessNumber}>
        <Text>
            Take
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  txtM: {
    fontSize:50,
  },
  btnLikePrimary: {
    padding:10,
    backgroundColor:'blue',
    borderRadius:10,
    margin:10,
    color:'white'
  },
  btnLikeSecondary: {
    padding:10,
    backgroundColor:'red',
    borderRadius:10,
    margin:10,
    color:'White'
  },
});

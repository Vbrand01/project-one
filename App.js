import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>

      <Button title="Send 1" />
      <StatusBar style="auto" backgroundColor='blue' />
    </View>
  );
}


interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return(

    <TouchableOpacity>
      <Text>
        {props.title}
        </Text>
    </TouchableOpacity>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
  }
});

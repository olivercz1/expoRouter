import { Link } from "expo-router";
import { Text, View, StyleSheet,Button,Pressable } from "react-native";

export default function AboutScreen(){
  return(
    <View style={styles.container}>
      <Text>Essa é a tela Sobre</Text>
      <Pressable style={styles.buttonBlue}>
      <Link href='/'><Button
        title="Voltar para a Home "
      /></Link>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffe0',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
    buttonBlue: {
    backgroundColor: '#7FFFD4',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
})

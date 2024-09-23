import { Link } from "expo-router";
import { Text, View, StyleSheet,Button ,Pressable} from "react-native";

export default function Tela02(){
  return(
    <View style={styles.container}>
       <Text>Essa é a tela2</Text>
      <Pressable style={styles.buttonestelizar}>
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
  buttonestelizar: {
    backgroundColor: '#7FFFD4',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
})

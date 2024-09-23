import { Link } from "expo-router";
import { Text, View, StyleSheet,Button } from "react-native";

export default function Tela04(){
  return(
    <View style={styles.container}>
      <Text>Essa é a tela Tela04</Text>
      <Link href='/'><Button
        title="Voltar para a Home "
      /></Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffe0',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

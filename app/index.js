import { StyleSheet, Text, View,Pressable, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao App, estou utilizando o Expo Router</Text>
      <Link href='/about'>
      <Button
        title="Ir para Tela About "
      /></Link>
      <Link href='/tela2'><Button
        title="Ir para Tela02 "
      /></Link>
      <Link href='/tela3'><Button
        title="Ir para Tela03 "
      /></Link>
      <Link href='/tela4'><Button
        title="Ir para Tela04 "
      /></Link>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#ffffe0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

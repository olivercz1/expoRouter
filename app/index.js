import { StyleSheet, Text, View,Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao App, estou utilizando o Expo Router</Text>
      <Link href='/about'>Ir para Tela About</Link>
      <Link href='/tela2'>Ir para Tela02</Link>
      <Link href='/tela3'>Ir para Tela03</Link>
      <Link href='/tela4'>Ir para Tela04</Link>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

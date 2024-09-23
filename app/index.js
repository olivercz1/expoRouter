import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text> Bem vindo ao App, estou utilizando o Expo Router</Text>

      <Link href='/about'>
        <Pressable style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Ir para Tela About</Text>
        </Pressable>
      </Link>

      <Link href='/tela2'>
        <Pressable style={styles.buttonWhite}>
          <Text style={styles.buttonText}>Ir para Tela02</Text>
        </Pressable>
      </Link>

      <Link href='/tela3'>
        <Pressable style={styles.buttonGray}>
          <Text style={styles.buttonText}>Ir para Tela03</Text>
        </Pressable>
      </Link>

      <Link href='/tela4'>
        <Pressable style={styles.buttonDefault}>
          <Text style={styles.buttonText}>Ir para Tela04</Text>
        </Pressable>
      </Link>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffe0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBlue: {
    backgroundColor: '#0000ff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonWhite: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonGray: {
    backgroundColor: '#808080',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonDefault: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

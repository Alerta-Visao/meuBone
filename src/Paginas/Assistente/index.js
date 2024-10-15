import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';


export default function PaginaInicial({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}  source={require('../../assets/Logo-sem-fundo.png')}></Image>
      <TouchableOpacity style={styles.fundoBotao} onPress={() => navigation.navigate('homePA')}>
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.texto}>Sou acompanhante</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '48%',
    width: '50%',
    marginTop: -150,
  },
  fundoBotao: {
    marginTop: -20,
    backgroundColor: '#FFCF66',
    borderRadius: 5,
    width: '85%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto: {
    color: '#FFCF66',
    fontWeight: 'bold',
    marginTop: 100,
    fontSize: 20,
  },
});

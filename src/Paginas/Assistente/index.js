import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';

{/*FUncao PaginaInicial */}
export default function PaginaInicial({navigation}) {

  return (
    //Container Principal
    <View style={styles.container}>

      {/*Logo */}
      <Image style={styles.logo}  source={require('../../assets/Logo-sem-fundo.png')}></Image>

      {/*Botao de Entrar da Pessoa Assistida*/}
      <TouchableOpacity style={styles.fundoBotao} onPress={() => navigation.navigate('homePA')}>
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/*Botão Login do Acompanhante */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.texto}>Sou acompanhante</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>//fim do Container Principal
  );//fim do return
}//fim da funcao 


{/*Definiçao de Estilos */}

//Container Principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Logo
  logo: {
    height: '48%',
    width: '50%',
    marginTop: -150,
  },

  //Botao de Entrar
  fundoBotao: {
    marginTop: -20,
    backgroundColor: '#FFCF66',
    borderRadius: 5,
    width: '85%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Texto do Botao Entrar
  textoBotao:{
    fontSize: 20,
    fontWeight: 'bold',
  },

  //Texto Fazer Login
  texto: {
    color: '#FFCF66',
    fontWeight: 'bold',
    marginTop: 100,
    fontSize: 20,
  },
});//fim dos estilos

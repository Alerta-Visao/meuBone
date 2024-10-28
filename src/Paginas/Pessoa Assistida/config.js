import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Dimensions } from 'react-native';

{/* Recurso para aplicar Responsividade, calcula as medidas de cada tela */}
const { height } = Dimensions.get('window');

{/* Função Ativar Sensores */}
export function AtivarSensores({ navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);

  return (
    //Container Principal
    <View style={styles.container}>

      {/* Container do Título */}
      <View style={styles.containerTitulo}>
        <Text style={styles.textoTitulo}>Ativar Sensores</Text>
      </View>

      {/* Container de CheckBoxes */}
      <View style={styles.checkboxContainer}>

        {/* Check Box 1 */}
        <View style={styles.checkbox}>
          <Text style={[styles.checkboxText, { marginRight: 100, marginLeft: 30 }]}>Longe</Text>
          <CheckBox
            checked={check1}
            onPress={() => setCheck1(!check1)}
            containerStyle={styles.checkbox}
            checkedColor="#FFCF66"
            uncheckedColor="#FFFFFF"
            size={70}
          />
        </View>

        {/* Check Box 2 */}
        <View style={styles.checkbox}>
          <Text style={[styles.checkboxText, { marginRight: 101, marginLeft: 30 }]}>Médio</Text>
          <CheckBox
            checked={check2}
            onPress={() => setCheck2(!check2)}
            containerStyle={styles.checkbox}
            checkedColor="#FFCF66"
            uncheckedColor="#FFFFFF"
            size={70}
          />
        </View>

        {/* Check Box 3 */}
        <View style={styles.checkbox}>
          <Text style={[styles.checkboxText, { marginRight: 20, marginLeft: 30 }]}>Muito Perto</Text>
          <CheckBox
            checked={check3}
            onPress={() => setCheck3(!check3)}
            containerStyle={styles.checkbox}
            checkedColor="#FFCF66"
            uncheckedColor="#FFFFFF"
            size={70}
            disabled={true}
          />
        </View>

      </View>{/* Fim do Container de CheckBoxes */}

      {/* Rodapé (Navegação) */}
      <View style={styles.rodape}>

        {/*Botao Voltar*/}
        <TouchableOpacity
          style={[styles.buttonRodape, { backgroundColor: '#333232' }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        {/*Botao Avançado*/}
        <TouchableOpacity
          style={[styles.buttonRodape, { backgroundColor: '#232323' }]}
          onPress={() => navigation.navigate('configAvancada')}
        >
          <Text style={[styles.buttonText, { color: '#FFCF66' }]}>Avançado</Text>
        </TouchableOpacity>
      </View>{/*Fim do Rodape*/}
    </View>//Fim do Container Principal
  )//Fim do Return
}//Fim da Função Ativar Sensores

// Definição de Estilos
const styles = StyleSheet.create({
//Container Principal
  container: {
    flex: 1,
    backgroundColor: "#6A6A6A",
    padding: 20,
  },
//Container do Titulo
  containerTitulo: {
    backgroundColor: '#383535',
    paddingVertical: '10%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex:1,
  },
//Texto do Container do Titulo
  textoTitulo: {
    color: '#FFCF66',
    fontSize: height * 0.05,
  },
//Container das CheckBoxes
checkboxContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop:'20%',
  paddingBottom:'10%',
},
//CheckBox
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
//Texto da CheckBox
  checkboxText: {
    fontSize: 35,
    color: '#FFFFFF',
  },
//Container do Rodape
  rodape: {
   position: 'absolute', // fixa no inferior da tela
   bottom: 0, // alinha na parte inferior da tela
   left: 0,
   right: 0,
   flexDirection: 'row',
   justifyContent: 'space-between', // espaço igual entre os botoes
   backgroundColor: '#6A6A6A', // fundo da mesma cor
  },
  //Botoes do Rodape
  buttonRodape: {
   flex: 1, // botoes com a mesma largura
   padding: 15,
   alignItems: 'center',
   borderWidth: 0,
  },
  //Texto do Botao
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

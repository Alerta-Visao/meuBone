import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { CheckBox } from 'react-native-elements'

export function AtivarSensores({navigation}){
   const [check1, setCheck1] = useState(false);
   const [check2, setCheck2] = useState(false);
   const [check3, setCheck3] = useState(true);

   return(
      <View style={styles.container}>
         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Ativar Sensores
            </Text>
         </View>

         <View style={styles.checkboxContainer}>
            {/*Check Box 1*/}
            <View style={styles.checkbox} >
            <Text style={[styles.checkboxText, {marginRight: 100, marginLeft: 30}]}>Longe</Text>
            <CheckBox
                     checked={check1} 
                     onPress={() => setCheck1(!check1)} 
                     containerStyle={styles.checkbox} 
                     checkedColor="#FFCF66" 
                     uncheckedColor="#FFFFFF"
                     size={70} 
                     />
            </View>

            {/*Check Box 2*/}
            <View style={styles.checkbox}>
            <Text style={[styles.checkboxText, {marginRight: 101, marginLeft: 30}]}>Médio</Text>
            <CheckBox
                     checked={check2} 
                     onPress={() => setCheck2(!check2)} 
                     containerStyle={styles.checkbox} 
                     checkedColor="#FFCF66" 
                     uncheckedColor="#FFFFFF"
                     size={70} 
                     />
            </View>

            {/*Check Box 3*/}
            <View style={styles.checkbox}>
            <Text style={[styles.checkboxText, {marginRight: 20, marginLeft: 30}]}>Muito Perto</Text>
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
         </View>

         <View style={{flex: 0.5, flexDirection: 'row',  alignItems: 'flex-end', justifyContent: 'center'}}>
         <TouchableOpacity style={{backgroundColor: '#333232',
                                  padding: 15,
                                  paddingLeft: '20%',
                                  paddingRight: '20%',}}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 20, 
                        color: 'white'}}>
            Voltar
          </Text>
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor: '#232323',
                                  padding: 15,
                                  paddingLeft: '16%',
                                  paddingRight: '16%',}} 
          onPress={() => navigation.navigate('configAvancada')}>
          <Text style={{fontSize: 20, 
                        color: '#FFCF66'}}>
            Avançado
          </Text>
        </TouchableOpacity>
      </View>

      </View>
   ) 
}

{/*Definição de Estilos*/}

//estilo da tela
const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor: "#6A6A6A",
     justifyContent: 'center', // Centraliza vertical
     alignItems: 'center',      // Centraliza horizontal
     
   },
   //estilo do titulo
   containerTitulo: {
      backgroundColor: '#383535', // Cor de fundo
      padding: 35, // Espaçamento interno
      alignItems: 'center', // Centraliza horizontalmente
      position: 'absolute', // Faz a View ficar no topo
      top: 0, // Alinha no topo da tela
      left: 0,
      right: 0,
      zIndex: 1, // Garante que fique acima de outros componentes
    },
   //estilo do texto do titulo
   textoTitulo:{
      color: '#FFCF66',
      fontSize: 40,
      fontWeight: '', // Negrito
   },
   //estilo do checkbox
   checkbox:{
      backgroundColor: 'transparent',  // Fundo transparente
      borderWidth: 0,                  // Remove qualquer borda
   },
   //estilo da view do checkbox
   checkbox: {
      flexDirection: 'row',  // Alinha os itens em linha
      alignItems: 'center',  // Centraliza verticalmente
      marginBottom: 15,      // Espaçamento entre as linhas (checkboxes)
    },
    //estilo do texto do checkbox
    checkboxText:{
      fontSize: 35,
      color: '#FFFFFF',
      marginBottom: 30,
      //marginRight: '1%',
    },
    checkboxContainer:{
      flex: 1,                       // O contêiner ocupa a tela toda
      justifyContent: 'center',       // Centraliza verticalmente
      alignItems: 'center',           // Centraliza horizontalmente
      marginTop: 100,
    },
})
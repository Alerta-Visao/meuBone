import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { CheckBox } from 'react-native-elements'

export default function ConfigAvancada({navigation}){
   
   return(
      <View style={styles.container}>
         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Configurar Distâncias
            </Text>
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
                                  paddingRight: '16%',
                                  }} 
          onPress={() => navigation.navigate('')}>
          <Text style={{fontSize: 20, 
                        color: '#FFCF66'}}>
            Salvar
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
      fontSize: 33,
      fontWeight: '', // Negrito
   },
   //estilo da inputBox

})
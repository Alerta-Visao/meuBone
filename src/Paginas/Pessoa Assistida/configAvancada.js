import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { CheckBox } from 'react-native-elements'

export function ConfigAvancada(){
   
   return(
      <View style={styles.container}>
         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Configurar Distâncias
            </Text>
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
})
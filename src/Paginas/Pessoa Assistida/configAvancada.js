import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Modal} from 'react-native'

import ModalConfiguracoesSalvas from '../../../Modal/modalConfiguracoesSalvas'

import { Dimensions } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const { height } = Dimensions.get('window');


export default function ConfigAvancada({navigation}){
   

   const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
   const [number3, setNumber3] = useState(0);

   const [modalVisible, setModalVisible] = useState(false)

   function chamarModal(){
     setModalVisible(true);
   }
   
   return(
      <View style={styles.container}>
         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Configurar Distâncias
            </Text>
         </View>  

         
      {/* Container de Configurar Distancias */}
      <View style={styles.containerConfig}>

         {/* Campo 1 */}
         <View style={styles.config}>
            <Text style={styles.configText}>Longe</Text>
               <TouchableOpacity onPress={() => setNumber1(number1 - 1)} style={styles.button}>
                  <Text style={styles.buttonText}>-</Text>
               </TouchableOpacity>

                  <Text style={styles.numero}>{number1}</Text>

               <TouchableOpacity onPress={() => setNumber1(number1 + 1)} style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
               </TouchableOpacity>
         </View>

         {/* Campo 2 */}
         <View style={styles.config}>
            <Text style={styles.configText}>Médio</Text>
            <TouchableOpacity onPress={() => setNumber2(number2 - 1)} style={styles.button}>
               <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

               <Text style={styles.numero}>{number2}</Text>

            <TouchableOpacity onPress={() => setNumber2(number2 + 1)} style={styles.button}>
               <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
         </View>

          {/* Campo 3 */}
          <View style={styles.config}>
            <Text style={styles.configText}>Muito Perto</Text>
            <TouchableOpacity onPress={() => setNumber3(number3 - 1)} style={styles.button}>
               <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

               <Text style={styles.numero}>{number3}</Text>

            <TouchableOpacity onPress={() => setNumber3(number3 + 1)} style={styles.button}>
               <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
         </View>
      </View>
    
      
         {/* Botões de Navegação */}
         <View style={styles.footer}>
            <TouchableOpacity
               style={[styles.footerButton, { backgroundColor: '#333232' }]}
               onPress={() => navigation.goBack()}
            >
               <Text style={[styles.footerButtonText,]}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.footerButton, {backgroundColor: '#232323'}]}
               onPress={chamarModal}
            >
               <Text style={[styles.footerButtonText, {color:'#FFCF66'}]}>Salvar</Text>
               <Modal visible={modalVisible} animationType='fade' transparent={true}>
                  <ModalConfiguracoesSalvas fechar={() => setModalVisible(false)} />
               </Modal>
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
      backgroundColor: '#383535',
      paddingVertical: '10%',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      flex:1,
    },
    textoTitulo: {
      color: '#FFCF66',
      fontSize: height * 0.05,
    },

   //view de configuração
   config:{
      flexDirection: 'row',  // Alinha os itens em linha
      alignItems: 'center',  // Centraliza verticalmente
      marginBottom: height * 0.04, // Espaçamento entre as linhas
      width: '100%', // Use 100% da largura disponível
      justifyContent: 'space-between', // Espaçamento uniforme entre os itens
      
   },
   //container de configuraçoes
   containerConfig:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: height * 0.15, // Ajuste baseado na altura da tela
      paddingBottom: height * 0.05, // Ajuste baseado na altura da tela
      width: '90%', // Use 90% da largura da tela
   },
   //estilo do botao
   button:{
      backgroundColor: '#232323',
      padding: 15,
      borderRadius: 5,
   },
   //estilo do texto do campo
   buttonText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
   },
   //estilo do numero
   numero:{
      fontSize: height * 0.07, // Responsivo com base na altura
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
   },
   configText:{
      fontSize: height * 0.05, // Responsivo com base na altura
      color: '#FFFFFF',
      marginRight: 20, // Ajustar se necessário
    },
    //rodape
    footer: {
      position: 'absolute', // Mantém a posição fixa na parte inferior
      bottom: 0, // Alinha na parte inferior da tela
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between', // Espaça os botões igualmente
      backgroundColor: '#6A6A6A', // Fundo igual ao resto da tela
   },
   footerButton: {
      flex: 1, // Cada botão agora ocupará a mesma largura
      padding: 15,
      alignItems: 'center',
      borderWidth: 0,
   },
   footerButtonText: {
      fontSize: 20,
      color: 'white',
},

});
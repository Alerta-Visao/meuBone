import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Modal} from 'react-native'

{/*Importando o Modal Utilizado*/}
import ModalConfiguracoesSalvas from '../../../Modal/modalConfiguracoesSalvas'

{/*Recurso de Responsividade*/}
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

{/*Função ConfigAvancada*/}
export default function ConfigAvancada({navigation}){
   
   {/*Constantes responsáveis por acumular os números dos botoes de configuração*/}
   const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
   const [number3, setNumber3] = useState(0);

   {/*Constante que define o estado do modal, ativo ou inativo*/}
   const [modalVisible, setModalVisible] = useState(false)

   {/*Funcao que chama o Modal*/}
   function chamarModal(){
     setModalVisible(true);
   }//fim da funcao
   
   return(
      //Container Principal
      <View style={styles.container}>

         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Configurar Distâncias
            </Text>
         </View>{/*Fim do Titulo*/}

         {/* Container de Configurar Distancias */}
         <View style={styles.containerConfig}>

            {/* Campo 1 */}
            <View style={styles.config}>
               <Text style={styles.configText}>Longe</Text>
                  <TouchableOpacity onPress={() => setNumber1(number1 - 1)} style={styles.button}>
                     <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>

                     <Text style={styles.numero}>{number1}</Text>{/*Variavel que aumenta ou diminui*/}

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

                  <Text style={styles.numero}>{number2}</Text>{/*Variavel que aumenta ou diminui*/}

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

                  <Text style={styles.numero}>{number3}</Text>{/*Variavel que aumenta ou diminui*/}

               <TouchableOpacity onPress={() => setNumber3(number3 + 1)} style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
               </TouchableOpacity>
            </View>
         </View>
    
         {/* Rodape (navegação) */}
         <View style={styles.rodape}>

            {/*Botao Voltar*/}
            <TouchableOpacity
               style={[styles.buttonRodape, { backgroundColor: '#333232' }]}
               onPress={() => navigation.goBack()}
            >
               <Text style={[styles.buttonRodapeText,]}>Voltar</Text>
            </TouchableOpacity>

            {/*Botao Salvar*/}
            <TouchableOpacity
               style={[styles.buttonRodape, {backgroundColor: '#232323'}]}
               onPress={chamarModal}
            >
               <Text style={[styles.buttonRodapeText, {color:'#FFCF66'}]}>Salvar</Text>
               <Modal visible={modalVisible} animationType='fade' transparent={true}>
                  <ModalConfiguracoesSalvas fechar={() => setModalVisible(false)} />
               </Modal>
            </TouchableOpacity>
         </View>{/*Fim do Rodape*/}
      </View>//Fim do Container Principal
   )// fim do return
}// fim da funcao ConfigAvancada


{/*Definição de Estilos*/}

//Container Principal
const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor: "#6A6A6A",
      justifyContent: 'center', // Centraliza vertical
      alignItems: 'center',      // Centraliza horizontal
     
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
    //Titulo do Titulo
    textoTitulo: {
      color: '#FFCF66',
      fontSize: height * 0.05,
    },

    //Container de Configuraçoes
   containerConfig:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: height * 0.15, // Ajuste baseado na altura da tela
      paddingBottom: height * 0.05, // Ajuste baseado na altura da tela
      width: '90%', // Use 90% da largura da tela
   },
   //View de Configuração
   config:{
      flexDirection: 'row',  // Alinha os itens em linha
      alignItems: 'center',  // Centraliza verticalmente
      marginBottom: height * 0.04, // Espaçamento entre as linhas
      width: '100%', // Use 100% da largura disponível
      justifyContent: 'space-between', // Espaçamento uniforme entre os itens
      
   },
   //Botao de Configuraçao (+ e -)
   button:{
      backgroundColor: '#232323',
      padding: 15,
      borderRadius: 5,
   },
   //Texto do Botão de Configuração (+ e -)
   buttonText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
   },
   //Numero da Configuraçao (variavel)
   numero:{
      fontSize: height * 0.07, // responsivo com base na altura
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
   },
   //Texto da Configuraçao
   configText:{
      fontSize: height * 0.05, // responsivo com base na altura
      color: '#FFFFFF',
      marginRight: 20, // margem
    },

    //Rodape
    rodape: {
      position: 'absolute', // fixa na parte inferior
      bottom: 0, // alinha no fim da pagina
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between', // espaca os botoes igualmente
      backgroundColor: '#6A6A6A', // fundo do rodape
   },
   //Botoes do Radape
   buttonRodape: {
      flex: 1, // ajusta tamanho dos botoes
      padding: 15,
      alignItems: 'center',
      borderWidth: 0,
   },
   //Texto do Botao do Rodape
   buttonRodapeText: {
      fontSize: 20,
      color: 'white',
   },
})//fim dos estilos
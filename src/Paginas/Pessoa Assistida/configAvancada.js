import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { CheckBox, withTheme } from 'react-native-elements'

export default function ConfigAvancada({navigation}){

   const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
   const [number3, setNumber3] = useState(0);
   
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
         <View style={styles.containerDistancia}>
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
         <View style={styles.containerDistancia}>
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
          <View style={styles.containerDistancia}>
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
    
      
         {/*Botoes de Navegação*/}
         <View style={{flex: 1, flexDirection: 'row',  alignItems: 'flex-end', justifyContent: 'center'}}>
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


   //view de configuração
   containerDistancia:{
      flexDirection: 'row',  // Alinha os itens em linha
      alignItems: 'center',  // Centraliza verticalmente
      marginBottom: 40,      // Espaçamento entre as linhas
      bottom:'-35%',
      flexDirection: 'row',
   },
   //campos de configuração
   containerConfig:{
      flex: 1,                       // O contêiner ocupa a tela toda
      justifyContent: 'center',       // Centraliza verticalmente
      alignItems: 'center',           // Centraliza horizontalmente
      marginTop: 100,
   },
   //estilo do botao
   button:{
      backgroundColor: '#232323',
      padding: 15,
      marginHorizontal: 20,      // Espaçamento entre os botões e o número
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
      fontSize: 45,
      justifyContent: 'center',
      alignItems:'center',
      color: 'white',
   },
   configText:{
      fontSize: 35,
      color: '#FFFFFF',
      marginRight: 30,
    },
})
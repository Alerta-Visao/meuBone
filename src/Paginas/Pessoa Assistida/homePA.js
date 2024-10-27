import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal} from 'react-native'

import ModalConexaoEstabelecida from '../../../Modal/modalConexaoEstabelecida'
import ModalEmergencia from '../../../Modal/modalEmergencia'
import ModalAlarmeLocalizacao from '../../../Modal/modalAlarmeLocalizacao'

export function HomePA({ navigation }){
  const [modalBluetoothVisible, setModalBluetoothVisible] = useState(false)
  const [modalEmergenciaVisible, setModalEmergenciaVisible] = useState(false)
  const [modalAlarmeVisible, setModalAlarmeVisible] = useState(false)

  function chamarModalBluetooth(){
    setModalBluetoothVisible(true);
  }
  function chamarModalEmergencia(){
    setModalEmergenciaVisible(true);
  }
  function chamarModalAlarme(){
    setModalAlarmeVisible(true);
  }

  return(
    <View style={styles.container}> 
    {/*Botão Conectar ao Bluetooth */}

      <TouchableOpacity style={styles.buttonTopStyle} onPress={chamarModalBluetooth}>
        <Image source={require('../../assets/buttonBluetooth.png')} style={styles.imageBluetooth}/>
          <Modal visible={modalBluetoothVisible} animationType='fade' transparent={true}>
              <ModalConexaoEstabelecida fechar={() => setModalBluetoothVisible(false)}/>
          </Modal>
      </TouchableOpacity>

    {/*Botão Conectar Voltar */}
      <View>
      <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/buttonVoltar.png')} style={styles.imageVoltar} />
        </TouchableOpacity>
      </View>

      <View>
      {/*Botão de Configuração */}
        <TouchableOpacity onPress={() => navigation.navigate('config')}>
          <Image source={require('../../assets/buttonConfig.png')} style={styles.imageButton}/>
        </TouchableOpacity>
      
      {/*Botão de Emergência */}
        <TouchableOpacity onPress={chamarModalEmergencia}>
          <Image source={require('../../assets/buttonEmergencia.png')} style={styles.imageButton}/>
          <Modal visible={modalEmergenciaVisible} animationType='fade' transparent={true}>
              <ModalEmergencia fechar={() => setModalEmergenciaVisible(false)}/>
          </Modal>
        </TouchableOpacity>

        {/*Botão de Rastreamento */}  
        <TouchableOpacity onPress={chamarModalAlarme}>
          <Image source={require('../../assets/buttonRastrear.png')} style={styles.imageButton}/>
          <Modal visible={modalAlarmeVisible} animationType='fade' transparent={true}>
              <ModalAlarmeLocalizacao fechar={() => setModalAlarmeVisible(false)}/>
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
    justifyContent: 'flex-start', // Centraliza vertical
    alignItems: 'center',      // Centraliza horizontal
    
  },

  //estilo do botao voltar
  buttonVoltar:{
    marginTop: 110,
    right: 150,
  },

  //estilo da imagem do botao voltar
  imageVoltar:{
    width: 36,  // Largura 
    height: 36, // Altura 
  },

  //estilo do botao de bluetooth
  buttonTopStyle: {
    position: 'absolute',  // Faz o botão ficar fixo
    top: 0,                // Fixa o botão no topo da tela
    left: 0,               // Alinha o botão à esquerda
    right: 0,              // Alinha o botão à direita (ocupando toda a largura)
    height: 80,            // Define a altura do botão
    justifyContent: 'center', // Centraliza a imagem verticalmente
    alignItems: 'center',  // Centraliza a imagem horizontalmente
  },

  //estilo da imagem do botão de bluetooth
  imageBluetooth: {
    width: '100%',         // Faz a imagem ocupar toda a largura do botão
    height: '100%',        // Faz a imagem ocupar toda a altura do botão
    resizeMode: 'auto', // ajusta a proporção da imagem
    
  },

  //estilo da imagem dos botoes principais
  imageButton: {
    width: 150,  // Largura 
    height: 150, // Altura 
    marginBottom: 20, // Espaço entre os botoes
  },
  
})

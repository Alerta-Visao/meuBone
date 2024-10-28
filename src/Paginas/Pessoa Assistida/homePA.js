import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal} from 'react-native'

{/*Importando os Modais Usados */}
import ModalConexaoEstabelecida from '../../../Modal/modalConexaoEstabelecida'
import ModalEmergencia from '../../../Modal/modalEmergencia'
import ModalAlarmeLocalizacao from '../../../Modal/modalAlarmeLocalizacao'

{/*Funcao HomePA */}
export function HomePA({ navigation }){
  {/*Constantes que Definem o estado dos modais*/}
  const [modalBluetoothVisible, setModalBluetoothVisible] = useState(false)
  const [modalEmergenciaVisible, setModalEmergenciaVisible] = useState(false)
  const [modalAlarmeVisible, setModalAlarmeVisible] = useState(false)

  {/*Funções que mudam o estado do modal de desativado para ativado */}
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
    //Container Principal
    <View style={styles.container}> 

      {/*Botão Conectar ao Bluetooth */}
      <TouchableOpacity style={styles.buttonTopStyle} onPress={chamarModalBluetooth}>
        <Image source={require('../../assets/buttonBluetooth.png')} style={styles.imageBluetooth}/>
          <Modal visible={modalBluetoothVisible} animationType='fade' transparent={true}>
              <ModalConexaoEstabelecida fechar={() => setModalBluetoothVisible(false)}/>
          </Modal>
      </TouchableOpacity>

      {/*Botão Voltar */}
      <View>
      <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/buttonVoltar.png')} style={styles.imageVoltar} />
        </TouchableOpacity>
      </View>

      {/*Menu */}
      <View>
        {/*Botão de Configuração */}
        <TouchableOpacity style={styles.botoesPrincipais} onPress={() => navigation.navigate('config')}>
          <Image source={require('../../assets/buttonConfig.png')} style={styles.imageButton}/>
        </TouchableOpacity>
      
        {/*Botão de Emergência */}
        <TouchableOpacity style={styles.botoesPrincipais} onPress={chamarModalEmergencia}>
          <Image source={require('../../assets/buttonEmergencia.png')} style={styles.imageButton}/>
          <Modal visible={modalEmergenciaVisible} animationType='fade' transparent={true}>
              <ModalEmergencia fechar={() => setModalEmergenciaVisible(false)}/>
          </Modal>
        </TouchableOpacity>

        {/*Botão de Rastreamento */}  
        <TouchableOpacity style={styles.botoesPrincipais}onPress={chamarModalAlarme}>
          <Image source={require('../../assets/buttonRastrear.png')} style={styles.imageButton}/>
          <Modal visible={modalAlarmeVisible} animationType='fade' transparent={true}>
              <ModalAlarmeLocalizacao fechar={() => setModalAlarmeVisible(false)}/>
          </Modal>
        </TouchableOpacity>
      </View>{/*Fim do Menu */}
    </View>//fim do Container Principal      
  )//fim do return
}//fim da funcao HomePA

{/*Definição de Estilos*/}

//Container Principal
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#6A6A6A",
    justifyContent: 'flex-start',//centraliza vertical
    alignItems: 'center', // centraliza horizontal
    padding: 20
  },

  //Botao Voltar
  buttonVoltar:{
    marginTop: '30%',
    right: '37%',
    flex: 0.01, //recurso de responsividade
  },
  //Imagem do Botao Voltar
  imageVoltar:{
    width: 36,  // largura 
    height: 36, // altura 
  },

  //Botao Bluetooth
  buttonTopStyle: {
    position: 'absolute',  // torna botao fixo
    top: 0,                // fixa no topo da tela
    left: 0,               // alinha a esquerda
    right: 0,              // alinha a direita (ocupando toda a largura)
    height: 80,            // altura
    justifyContent: 'center', // Centraliza verticalmentes
    alignItems: 'center',  // Centraliza horizontalmente
  },
  //Imagem do botão de bluetooth
  imageBluetooth: {
    width: '100%',         // faz a imagem ocupar toda a largura do botão
    height: '100%',        // faz a imagem ocupar toda a altura do botão
    //resizeMode: 'auto', 
  },

  //Botoes Principais
  botoesPrincipais:{
    width: 150,  // Largura 
    height: 150, // Altura 
    marginBottom: '5%', // Espaço entre os botoes
  },

  //Imagem dos botoes principais
  imageButton: {
    width: '100%',  // Largura 
    height: '100%', // Altura 
  },
  
})

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

{/*Funcao EscolherUsuario */}
export default function EscolherUsuario({navigation}) {

  return (
    //Container Principal
    <View style={styles.container}>

      {/*Botão do Acompanhante*/}
      <TouchableOpacity onPress={() => navigation.navigate('UsuarioAcompanhante')} style={{flex: 2}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
         <Image source={require('../../assets/iconeUsuarioMedio.png')}/>
         <Text style={{color: 'white', marginTop: 20, fontSize: 20}}>Nome do Acompanhante</Text>
      </View>
      </TouchableOpacity>

      <View style={{flex: 0.0001, borderWidth: 1}}></View>

      {/*Botao da Pessoa Assistida */}
      <TouchableOpacity onPress={() => navigation.navigate('UsuarioPessoaAssistida')} style={{flex: 2}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/iconeUsuarioMedio.png')}/>
        <Text style={{color: 'white', marginTop: 20, fontSize: 20}}>Nome da Pessoa Assistida</Text>
      </View>
      </TouchableOpacity>

      {/*Botão de Voltar */}
      <View style={{flex: 0.5, flexDirection: 'row',  alignItems: 'flex-end', justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#383535',
                                  padding: 13.5,
                                  paddingLeft: '50%',
                                  paddingRight: '50%',}} 
          onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/iconeUsuarioPequeno.png')}/>
        </TouchableOpacity>
      </View>
    </View>//fim do Container Principal
  );//fim do return
}//fim da funcao


{/*Definição de Estilos */}

//Container Principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
  },
});//fim dos estilos

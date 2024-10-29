import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal} from 'react-native';
import { useState } from 'react';

{/*Importando Modal Usado */}
import ModalAlteracoesRealizadas from '../../../Modal/modalAlteracoesRealizadas'

export default function UsuarioPessoaAssistida({navigation}) {
    const [modalVisible, setModalVisible] = useState(false)

    //variaveis para armazenar os dados
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    //funcão que realiza o cadastro do acompanhante
    function AtualizarAcompanhante() {
      const dadosCadastro = { nome, sobrenome, telefone, email, usuario, senha };
      console.log("Dados cadastrados:", dadosCadastro);
      navigation.navigate('EscolherUsuario');  // Navegar para a próxima tela
      // futura conexao com banco de dados
    }//fim da funcao

    function chamarModal(){
      setModalVisible(true);
    }
  return (
    <View style={styles.container}>
      <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'center', alignItems: 'center', columnGap: 65,
      }}>
        <Image source={require('../../assets/iconeAlterarFotoUsuario.png')}></Image>
      </View>
      <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', columnGap: 20}}>
      <TextInput style={{
                    paddingLeft: 10,
                    fontSize: 20, 
                    width: '40%', 
                    height: '75%',
                    borderRadius: 5,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'white',
                    color: 'white'}} 
                    placeholder='Nome'
                    placeholderTextColor = "white"
                    value={nome}
                    onChangeText={setNome}
        />
        <TextInput style={{
                    paddingLeft: 10,
                    fontSize: 20, 
                    width: '40%', 
                    height: '75%',
                    borderRadius: 5,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'white'
        }} 
          placeholder='Sobrenome'
          placeholderTextColor = "white"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center', }}>
      <TextInput style={styles.input}  
        placeholder='Telefone'
        placeholderTextColor = "white"
        keyboardType='number-pad'
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput style={styles.input} 
        placeholder='Email'
        placeholderTextColor = "white"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.input}  
        placeholder='Usuário'
        placeholderTextColor = "white"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput style={styles.input} 
        placeholder='Senha'
        placeholderTextColor = "white"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
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
                                  paddingLeft: '20%',
                                  paddingRight: '20%',}} 
          onPress={AtualizarAcompanhante}>
          <Text style={{fontSize: 20, 
                        color: '#FFCF66'}}>
            Salvar
          </Text>
          <Modal visible={modalVisible} animationType='fade' transparent={true}> 
            <ModalAlteracoesRealizadas fechar={() => setModalVisible(false)}/>
          </Modal>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#414141',
    },
    input: {
      color: 'white',
      paddingLeft: 10,
      fontSize: 20,
      width: '85%',
      height: '18%',
      borderRadius: 5,
      borderLeftWidth: 2,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'white',
      marginBottom: '4%',
    },
  });
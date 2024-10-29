import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

{/*Funcao Login */}
export default function Login({navigation}) {

  //variaveis para armazenar os dados
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    //funcão que realiza o cadastro do acompanhante
    function FazerLogin() {
      const dadosCadastro = { usuario, senha };
      console.log("Dados cadastrados:", dadosCadastro);
      navigation.navigate('Rastrear');  // Navegar para a próxima tela
      // futura conexao com banco de dados
    }//fim da funcao

  return (
    //Container Principal
    <View style={styles.container}>

      {/*Container do Topo da Pagina*/}
      <View style={{flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 65,
                    marginLeft: '-24%'
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{marginTop: '-5%', height: 35, width: 31}} source={require('../../assets/botaoVoltar.png')}></Image>
        </TouchableOpacity>
        <Image style={styles.logo}  source={require('../../assets/Logo-sem-fundo e sem letra 2.png')}></Image>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: '-8%'}}>
        <Text style={styles.textoLogin}>Login</Text>
      </View>

      {/*Formulario de Login */}
      <View style={{flex: 2.5, alignItems: 'center', }}>
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

        {/*Botao de Entrar */}
        <TouchableOpacity onPress={FazerLogin} style={styles.fundoBotao}>
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>

        {/*Botao de Cadastrar-Se */}
        <TouchableOpacity onPress={() => navigation.navigate('CadastroAcompanhante')}>
          <Text style={styles.textoCadatro}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>{/*Fim do Formulario de Login */}

      <View style={{flex: 0.5, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}></View>

    </View>//fim do container principal
  );
}

{/*Definição de Estilos */}

//Container Principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
  },
  //Logo
  logo:{
    marginTop: 40,
    height: 100,
    width: 120,
  },
  //Input
  input: {
    paddingLeft: 10,
    fontSize: 20,
    color: 'white',
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
  //Texto do Topo
  textoLogin: {
    marginTop: '5%',
    color: '#FFCF66',
    marginBottom: '15%',
    fontSize: 20,
  },
  //Botao de Entrar
  fundoBotao: {
    marginTop: '5%',
    backgroundColor: '#FFCF66',
    borderRadius: 5,
    width: '85%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Texto do Botao Entrar
  textoBotao:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  //Texto do Cadastrar-Se
  textoCadatro: {
    fontWeight: 'bold',
    color: '#FFCF66',
    marginTop: 60,
    fontSize: 20,
  },
});//Fim dos Estilos

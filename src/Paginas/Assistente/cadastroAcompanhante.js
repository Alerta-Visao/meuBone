import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

{/*Funcao CadastroAcompanhante */}
export default function CadastroAcompanhante({navigation}) {

  return (
    //Container Principal
    <View style={styles.container}>

      {/*Container da Logo */}
      <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'center', alignItems: 'center', columnGap: 65,
      }}>
        <Image style={styles.logo}  source={require('../../assets/Logo-sem-fundo e sem letra 2.png')}></Image>
      </View>

      <View style={{flex: 1, alignItems: 'center', marginTop: '-8%'}}>
        <Text style={styles.textoCadatro}>Cadastre-se:</Text>
      </View>

      {/*Formulario de Cadastro */}

      {/*Nome e SObrenome */}
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
        />
      {/*Telefone, Email, Usuario, Senha */}
      </View>
      <View style={{flex: 2, alignItems: 'center', }}>
      <TextInput style={styles.input}  
        placeholder='Telefone'
        placeholderTextColor = "white"
        keyboardType='number-pad'
      />
      <TextInput style={styles.input} 
        placeholder='Email'
        placeholderTextColor = "white"
        keyboardType='email-address'
      />
      <TextInput style={styles.input}  
        placeholder='Usuário'
        placeholderTextColor = "white"
      />
      <TextInput style={styles.input} 
        placeholder='Senha'
        placeholderTextColor = "white"
        secureTextEntry={true}
      />
      </View>{/*FIm do Formulario */}

      {/*Rodape (navegação) */}
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
                                  paddingRight: '16%',}} 
          onPress={() => navigation.navigate('CadastroPessoaAssistida')}>
          <Text style={{fontSize: 20, 
                        color: '#FFCF66'}}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>{/*FIm do Rodape*/}
    </View>//fim do container principal
  );//fim do return
}//fim da funcao

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
  //Texto Input
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
  //Titulo da Pagina
  textoCadatro: {
    marginTop: '5%',
    color: '#FFCF66',
    marginBottom: '15%',
    fontSize: 20,
  },
});

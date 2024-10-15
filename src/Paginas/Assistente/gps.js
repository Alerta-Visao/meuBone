import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function Gps({navigation}) {

  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
         <Text style={styles.textoCadatro}>Boas Vindas!</Text>
      </View>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>A pessoa assistida está aqui:</Text>
      </View>
      <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
        <Image source={require('../../assets/Mapa.png')}/>
      </View>
      <View style={{flex: 0.5, flexDirection: 'row',  alignItems: 'flex-end', justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#333232',
                                  padding: 15,
                                  paddingLeft: '20%',
                                  paddingRight: '20%',}} 
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 20, 
                        color: 'white',}}>
            Voltar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#232323',
                                  padding: 13.5,
                                  paddingLeft: '21%',
                                  paddingRight: '21%',}} 
          onPress={() => navigation.navigate('EscolherUsuario')}>
            <Image source={require('../../assets/iconeUsuarioPequeno.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
  },
  textoCadatro: {
    color: '#FFCF66',
    fontSize: 20,
  },
});

import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window'); // recurso de responsividade que obtem as dimensões da tela

export default function Rastrear({navigation}){
   const [location, setLocation] = useState(null);
   const [errorMsg, setErrorMsg] = useState(null);

   useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permissão para acessar a localização foi negada');
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
    
    let text = 'Esperando pela localização...';
   if (errorMsg) {
   text = errorMsg;
   } else if (location) {
   text = JSON.stringify(location);
   }

   return (
      <View style={styles.container}>
         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Boas Vindas!
            </Text>
            <Text style={styles.textoSubtitulo}>A pessoa assistida está aqui:</Text>
         </View>
      {location && (
      <MapView
         provider={PROVIDER_GOOGLE}
         style={styles.mapa}
         initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
         }}
      >
         {/* Marcador para a localização atual */}
         <Marker
            coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            }}
            title="Você está aqui"
            description="Localização atual"
         />
         
         {/* Marcador personalizado (Onde será configurada a localização do boné futuramente) */}
         <Marker
            coordinate={{
            latitude: -23.55052, 
            longitude: -46.6333,  
            }}
            title="Localização do Boné"
            description="Descrição da localização do boné"
         />
      </MapView>
      )}

            {/* Botões na parte inferior (Rodape) */}
            <View style={styles.rodape}>
            <TouchableOpacity
               style={[styles.buttonRodape, { backgroundColor: '#333232' }]}
               onPress={() => navigation.goBack()}
            >
               <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.buttonRodape, { backgroundColor: '#232323' }]}
               onPress={() => navigation.navigate('EscolherUsuario')}>
            <Image source={require('../../assets/iconeUsuarioPequeno.png')} styles={StyleSheet.icone}/>
            </TouchableOpacity>
            </View>
    </View>
   
   )}


{/*Definição de Estilos*/}

//estilo da pagina
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#6A6A6A",
     justifyContent: 'flex-start',
     alignItems: 'center',
     paddingTop: '40%',
   },
   //estilo do mapa
   mapa: {
      width: width * 0.9, // Largura relativa à largura da tela
      height: height * 0.6, // Altura relativa à altura da tela
    },
    //estilo do titulo
   containerTitulo: {
         backgroundColor: 'transparent',
         paddingVertical: '9%',
         alignItems: 'center',
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         flex:1,

    },
   //estilo do texto do titulo
   textoTitulo:{
      color: '#FFCF66',
      fontSize: height * 0.05,//responsividade
      fontWeight: '', // Negrito
   },
   //container subtitulo

   //estilo do subtitulo
   textoSubtitulo:{
      color: 'white',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
      fontSize: height * 0.03,//responsividade
   },

   //rodape
   rodape: {
      position: 'absolute', // Mantém a posição fixa na parte inferior
      bottom: 0, // Alinha na parte inferior da tela
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between', // Espaça os botões igualmente
      backgroundColor: '#6A6A6A', // Fundo igual ao resto da tela
     },
     buttonRodape: {
      flex: 1, // Cada botão agora ocupará a mesma largura
      padding: 15,
      alignItems: 'center',
      borderWidth: 0,
     },
     buttonText: {
       fontSize: 20,
       color: 'white',
     },
 })


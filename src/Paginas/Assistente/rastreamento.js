import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

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

            <View style={{flex: 1, flexDirection: 'row',  alignItems: 'flex-end', justifyContent: 'center'}}>
               <TouchableOpacity style={{backgroundColor: '#333232',
                                       padding: 16,
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
     paddingTop: 180,
   },
   //estilo do mapa
   mapa: {
      width: 350, // Largura fixa do mapa
      height: 410, // Altura fixa do mapa
      borderRadius: 100, // Bordas arredondadas, opcional
      overflow: 'hidden', // Para aplicar o arredondamento corretamente
    },
    //estilo do titulo
   containerTitulo: {
      padding: 35, // Espaçamento interno
      alignItems: 'center', // Centraliza horizontalmente
      position: 'absolute', // Faz a View ficar no topo
      top: 25, // Alinha no topo da tela
      left: 0,
      right: 0,
      zIndex: 1, // Garante que fique acima de outros componentes
    },
   //estilo do texto do titulo
   textoTitulo:{
      color: '#FFCF66',
      fontSize: 40,
      fontWeight: '', // Negrito
   },
   //container subtitulo

   //estilo do subtitulo
   textoSubtitulo:{
      color: 'white',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
      fontSize: 20,
   },
 })


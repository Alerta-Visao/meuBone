import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function ModalEmergencia({fechar}){
    return(
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.mensagem}>Seu contato de Emergência foi Acionado!</Text>
                <TouchableOpacity onPress={fechar} style={styles.botao}>
                    <Text style={styles.botaoTexto}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    conteudo:{
        backgroundColor: 'white',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    mensagem:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 25,
        width: 210,
        textAlign: 'center',
    },
    botao:{
        backgroundColor: '#FFCF66',
        borderRadius: 5,
        padding: 10,
    },
    botaoTexto:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})
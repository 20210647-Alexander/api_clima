import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Clima from './complementos/clima';


export default function App() {
    return (
        <View style={styles.container}>            
            <View style={styles.cuerpo}>
                <Clima/> 
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    encabezado: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1373e8',
        paddingHorizontal: 10, 
    },
    cuerpo: {
        flex: 8,
    },
    texto: {
        fontSize: 25,
        color: '#fff',
    }
})
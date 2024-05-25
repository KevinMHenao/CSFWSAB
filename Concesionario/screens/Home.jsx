import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const buttonPress = (buttonIndex) => {
        console.log('Botón presionado:', buttonIndex);
        if (buttonIndex === 1) {
            navigation.navigate('Catalog');
        }
        if (buttonIndex === 2) {
            navigation.navigate('TestDrive');
        }
        if (buttonIndex === 3) {
            navigation.navigate('Garage');
        }
        if (buttonIndex === 4) {
            navigation.navigate('Contact');
        }

    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.buttonColor]}
                onPress={() => buttonPress(1)}
            >
                <Text style={styles.buttonText}>Catalogo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonColor]}
                onPress={() => buttonPress(2)}
            >
                <Text style={styles.buttonText}>Test Drive</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonColor]}
                onPress={() => buttonPress(3)}
            >
                <Text style={styles.buttonText}>Mantenimientos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonColor]}
                onPress={() => buttonPress(4)}
            >
                <Text style={styles.buttonText}>Contactenos</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    buttonColor: {
        backgroundColor: 'green',
    },
});

export default Home; 

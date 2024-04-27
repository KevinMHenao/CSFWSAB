import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Informacion = () => {
    const [placa, setPlaca] = useState('');
    const [numeroChasis, setNumeroChasis] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');

    const handleSubmit = () => {

        console.log('Datos del formulario:', { placa, numeroChasis, cedula, nombre });

    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Placa del vehículo:</Text>
            <TextInput
                style={styles.input}
                value={placa}
                onChangeText={text => setPlaca(text)}
                placeholder="Placa del vehículo"
            />
            <Text style={styles.label}>Número de chasis:</Text>
            <TextInput
                style={styles.input}
                value={numeroChasis}
                onChangeText={text => setNumeroChasis(text)}
                placeholder="Número de chasis"
            />
            <Text style={styles.label}>Cédula:</Text>
            <TextInput
                style={styles.input}
                value={cedula}
                onChangeText={text => setCedula(text)}
                placeholder="Cédula"
                keyboardType="numeric"
            />
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={text => setNombre(text)}
                placeholder="Nombre"
            />
            <Button title="Enviar" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default Informacion;

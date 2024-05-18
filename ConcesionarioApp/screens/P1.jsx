import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function P1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Concesionario El mejor. </Text>
            <Button
                title="Ir Inventario"
                onPress={() => navigation.navigate('Inventario')}
            />
            <Button
                title="Detalles del vehiculo"
                onPress={() => navigation.navigate('Detalle de vehiculo')}
            />
            <Button
                title="Solicitud de información"
                onPress={() => navigation.navigate('Solicitud de informacion')}
            />
            <Button
                title="Test drive"
                onPress={() => navigation.navigate('Test drive')}
            />
            <Button
                title="Solicitud de servicio"
                onPress={() => navigation.navigate('Solicitud de servicio')}
            />
            <Button
                title="Historial de servicio"
                onPress={() => navigation.navigate('Historial de servicio')}
            />
            <Button
                title="Notificaciones"
                onPress={() => navigation.navigate('Notificaciones')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,

        paddingHorizontal: 10,
        marginBottom: 90,
    },
    imagenContainer: {
        marginBottom: 20,
    },
    imagen: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descripcion: {
        fontSize: 16,
    },
    descripcion2: {
        fontSize: 16,
        color: "Darkgreen",
        fontWeight: 'bold',
    },
});
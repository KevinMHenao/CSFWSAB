import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HistorialServicio = () => {

  const [historialServicio, setHistorialServicio] = useState([]);

  const dummyHistorialServicio = [
    { id: 1, fecha: '2024-04-25', descripcion: 'Se cambio el aceite' },
    { id: 2, fecha: '2024-04-24', descripcion: 'Se cambió el carter' },
    { id: 3, fecha: '2024-04-23', descripcion: 'Se actualizó la información de propietario' },
  ];

  useEffect(() => {
    setHistorialServicio(dummyHistorialServicio);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historial de servicio</Text>
      <FlatList
        data={historialServicio}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.historialItem}>
            <Text style={styles.fecha}>{item.fecha}</Text>
            <Text>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historialItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  fecha: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HistorialServicio;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore'


const Garage = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const serviceSnapshot = await firestore().collection('services').get();
        const serviceData = serviceSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(serviceData);
      } catch (error) {
        console.error('Error agendando servicio: ', error);
      }
    };

    fetchServices();
  }, []);

  const datesAppointment = async () => {
    try {
      await firestore().collection('services').add({
        date: appointmentDate,
      });
      const updatedServices = [...services, { date: appointmentDate }];
      setServices(updatedServices);
      setAppointmentDate('');
    } catch (error) {
      console.error('Error agendando cita: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Cita</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha de la cita (DD/MM/AAAA)"
        value={appointmentDate}
        onChangeText={setAppointmentDate}
      />
      <Button title="Agendar" onPress={datesAppointment} />
      
      <Text style={styles.title}>Historial de Servicios</Text>
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <Text>{item.date}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Garage;

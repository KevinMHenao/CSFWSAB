import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { Picker } from '@react-native-picker/picker';

const TestDrive = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [reservationDate, setReservationDate] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehiclesSnapshot = await firestore().collection('verCarros').get();
        const vehiclesData = vehiclesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVehicles(vehiclesData);
      } catch (error) {
        console.error('Error fetching vehicles: ', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleReservation = async () => {
    try {
      await firestore().collection('testDriveReservations').add({
        vehicle: selectedVehicle,
        date: reservationDate,
      });

      setSelectedVehicle('');
      setReservationDate('');
    } catch (error) {
      console.error('Error realizando la reserva: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva de Test Drive</Text>
      <Text style={styles.label}>Selecciona un vehículo:</Text>
      <Picker
        selectedValue={selectedVehicle}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedVehicle(itemValue)}
      >
        <Picker.Item label="-- Selecciona un vehículo --" value="" />
        {vehicles.map(vehicle => (
          <Picker.Item key={vehicle.id} label={vehicle.name} value={vehicle.id} />
        ))}
      </Picker>
      <Text style={styles.label}>Fecha de la reserva:</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha de la reserva (DD/MM/AAAA)"
        value={reservationDate}
        onChangeText={setReservationDate}
      />
      <Button title="Reservar" onPress={handleReservation} />
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default TestDrive;

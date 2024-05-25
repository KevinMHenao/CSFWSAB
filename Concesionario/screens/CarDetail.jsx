import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CarDetail = ({ route }) => {
  const { vehicleId } = route.params;
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const vehicleDetails = async () => {
      try {
        const vehicleDoc = await firestore().collection('verCarros').doc(vehicleId).get();
        if (vehicleDoc.exists) {
          setVehicle(vehicleDoc.data());
        } else {
          console.error('Carro no encontrado');
        }
      } catch (error) {
        console.error('Error buscando el vehiculo: ', error);
      }
    };

    vehicleDetails();
  }, [vehicleId]);

  if (!vehicle) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: vehicle.imageURL }} style={styles.vehicleImage} />
      <Text style={styles.vehicleName}>Carro: {vehicle.name}</Text>
      <Text style={styles.vehiclePrice}>Precio: {vehicle.price}</Text>
      <Text style={styles.vehiclePrice}>Modelo: {vehicle.model}</Text>
      <Text style={styles.vehiclePrice}>Características: {vehicle.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  vehicleName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  vehiclePrice: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default CarDetail;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';

const Catalog = () => {
  const navigation = useNavigation();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    const verVehicles = async () => {
      try {
        const vehicleSnapshot = await firestore().collection('verCarros').get();
        const vehiclesData = vehicleSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVehicles(vehiclesData);
        setFilteredVehicles(vehiclesData);
      } catch (error) {
        console.error('Error en la búsqueda del vehículo. ', error);
      }
    };

    verVehicles();
  }, []);

  const carSearch = (carText) => {
    const filtered = vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(carText.toLowerCase()));
    setFilteredVehicles(filtered);
  };

  const navigateToCarDetail = (vehicleId) => {
    navigation.navigate('CarDetail', { vehicleId });
  };

  const renderCarItem = ({ item }) => (
    <TouchableOpacity style={styles.vehicleItemContainer} onPress={() => navigateToCarDetail(item.id)}>
      <Image source={{ uri: item.imageURL }} style={styles.vehicleImage} />
      <Text style={styles.vehicleName}>Carro: {item.name}</Text>
      <Text style={styles.vehiclePrice}>Precio: {item.price}</Text>
      <Text style={styles.vehiclePrice}>Modelo: {item.model}</Text>
      <Text style={styles.vehiclePrice}>Características: {item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar carro"
        onChangeText={carSearch}
      />
      <FlatList
        data={filteredVehicles}
        renderItem={renderCarItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.vehicleList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  vehicleList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  vehicleItemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  vehicleImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  vehiclePrice: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Catalog;

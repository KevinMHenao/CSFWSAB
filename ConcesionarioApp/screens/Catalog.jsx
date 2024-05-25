import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '@react-native-firebase/database';

const Catalog = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Obtener datos del catálogo desde Firebase
        firebase.database().ref('catalog').on('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                const carsArray = Object.values(data);
                setCars(carsArray);
            }
        });
    }, []);

    return (
        <View>
            <Text>Catalog</Text>
            {cars.map(car => (
                <View key={car.id}>
                    <Text>{car.name}</Text>
                    <Text>{car.description}</Text>
                    {/* Agrega más detalles según sea necesario */}

                    
                </View>
            ))}
        </View>
    );
};

export default Catalog;

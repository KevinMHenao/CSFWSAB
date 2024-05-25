import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
//import {firebase } from '../firebase/firebase'

const Garage = () => {
    const [carModel, setCarModel] = useState('');
    const [maintenanceDate, setMaintenanceDate] = useState('');

    const handleScheduleMaintenance = () => {
        // Guardar la programación de mantenimiento en Firebase
        firebase.database().ref('maintenance').push({
            carModel,
            maintenanceDate
        });
        // Lógica adicional (por ejemplo, mostrar un mensaje de confirmación)
    }; 

    return (
        <View>
            <Text>Schedule Maintenance</Text>
            <TextInput
                placeholder="Car Model"
                value={carModel}
                onChangeText={text => setCarModel(text)}
            />
            <TextInput
                placeholder="Maintenance Date"
                value={maintenanceDate}
                onChangeText={text => setMaintenanceDate(text)}
            />
            <Button title="Schedule" onPress={handleScheduleMaintenance} />
        </View>
    );
};

export default Garage;

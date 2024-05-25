import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
//import {firebase } from '../firebase/firebase'


const TestDrive = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRequestTestDrive = () => {
        // Guardar la solicitud en Firebase
        firebase.database().ref('TestDrive').push({
            name,
            email,
            phone
        });
        // Lógica adicional (por ejemplo, mostrar un mensaje de confirmación)
    };

    return (
        <View>
            <Text>Request Test Drive</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={text => setPhone(text)}
            />
            <Button title="Request" onPress={handleRequestTestDrive} />
        </View>
    );
};

export default TestDrive;

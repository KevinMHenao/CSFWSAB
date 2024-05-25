import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from '@react-native-firebase'; 


const Contact = () => {
   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        // Guardar el mensaje de contacto en Firebase
        firebase.database().ref('contactMessages').push({
            name,
            email,
            message
        });
        // Lógica adicional (por ejemplo, mostrar un mensaje de confirmación)
    };

    return (
        <View>
            <Text>Contact Us</Text>
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
                placeholder="Message"
                value={message}
                onChangeText={text => setMessage(text)}
                multiline
            />
            <Button title="Send" onPress={handleSendMessage} />
        </View>
    );
};

export default Contact;
 
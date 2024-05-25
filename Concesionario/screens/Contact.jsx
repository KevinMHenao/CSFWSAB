import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore'

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const sendMessage = async () => {
    try {
      await firestore().collection('contactMessages').add({
        email,
        message,
        name,
      });
      Alert.alert('Mensaje enviado correctamente');
      setEmail('');
      setMessage('');
      setName('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      Alert.alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contáctenos</Text>
      <Text style={styles.paragraph}>
        Concesionario el mejor. Si deseas más informacion de nosotros o tienes alguna PQRS puedes dejarla ingresando los datos en la parte inferior.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Mensaje"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <Button title="Enviar Mensaje" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  messageInput: {
    height: 100,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Contact;

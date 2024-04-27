import React from 'react';
import { View, Text, Button } from 'react-native';

export default function P3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Segunda Pantalla</Text>
      <Button
        title="Regresar a la pantalla principal"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

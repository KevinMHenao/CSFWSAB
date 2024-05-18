import React from 'react';

import P1 from './screens/P1';
import P2 from './screens/P2';
import P4 from './screens/P4';
import P3 from './screens/P3';
import P5 from './screens/P5';
import P6 from './screens/P6';
import P7 from './screens/P7';
import P8 from './screens/P8';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla">
        <Stack.Screen name="Menu" component={P1} />
        <Stack.Screen name="Inventario" component={P2} />
        <Stack.Screen name="Detalle de vehiculo" component={P3} />
        <Stack.Screen name="Solicitud de informacion" component={P4} />
        <Stack.Screen name="Test drive" component={P5} />
        <Stack.Screen name="Solicitud de servicio" component={P6} />
        <Stack.Screen name="Historial de servicio" component={P7} />
        <Stack.Screen name="Notificaciones" component={P8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

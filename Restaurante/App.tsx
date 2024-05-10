import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import NuevaOrden from './screens/NuevaOrden';
import Menu from './screens/Menu';
import DetallePlato from './screens/DetallePlato';
import FormularioPlato from './screens/FormularioPlato';
import ResumenPedido from './screens/ResumenPedido';
import ProgresoPedido from './screens/ProgresoPedido';

import FirebaseState from './context/firebase/firabaseState';
import PedidoState from './context/pedidos/pedidosState';
import { NativeBaseProvider } from "native-base";


const Stack = createStackNavigator();

const App = () => {
    return (
        <NativeBaseProvider>
            <FirebaseState>
                <PedidoState>
                    <NavigationContainer>
                        <Stack.Navigator>

                            <Stack.Screen
                                name='NuevaOrden' component={NuevaOrden}
                                options={{ title: 'Nueva Orden' }}
                            />
                            <Stack.Screen

                                name='Menu' component={Menu}
                                options={{ title: 'Menu' }}
                            />
                            <Stack.Screen

                                name='DetallePlato' component={DetallePlato}
                                options={{ title: 'Nueva Orden' }}
                            />

                            <Stack.Screen
                                name='FormularioPlato' component={FormularioPlato}
                                options={{ title: 'Nueva Orden' }}
                            />

                            <Stack.Screen
                                name='ResumenPedido' component={ResumenPedido}
                                options={{ title: 'Nueva Orden' }}
                            />

                            <Stack.Screen
                                name='ProgresoPedido' component={ProgresoPedido}
                                options={{ title: 'Nueva Orden' }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PedidoState>
            </FirebaseState>
        </NativeBaseProvider>
    )
}

export default App
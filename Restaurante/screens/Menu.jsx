import React, { useEffect, useContext, Fragment } from "react"
//import { View, Text } from "react-native"
import globalStyles from "../styles/globalStyles"
import { useNavigation, useNavigationBuilder } from "@react-navigation/native"
import FirebaseContext from "../context/firebase/firebaseContext"
import PedidosContext from "../context/pedidos/pedidosContext"
import { NativeBaseProvider, View, ScrollView, Text, Avatar } from "native-base"
import { List } from "react-native-paper"

const Menu = () => {
    const navigation = useNavigation();
    const { menu, obtenerProductos } = useContext(FirebaseContext)
    const { seleccionarPlatillo } = useContext(PedidosContext)
    useEffect(() => {
        obtenerProductos()
    }, [])

    return (
       <NativeBaseProvider>
            <ScrollView>
                <View>
                    {menu.map((plato, i) => {
                        const { Cedula, nomCarro } = plato
                        return (
                            <Fragment>
                                <Avatar size="70px" source={{ uri: imagen }}></Avatar>
                                <List.Item
                                    title={nomCarro}
                                    description={Cedula}
                                    onPress={() => navigation.navigate('DetallePlato')}
                                >
                                    <Text numberOfLines={1}
                                    >{Cedula}</Text>
                                    <Text>{nomCarro}</Text>
                                </List.Item>
                            </Fragment>
                        )
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default Menu;
import React, {useEffect, useContext, Fragment} from "react"
import { View, Text } from "react-native"
import globalStyles from "../styles/globalStyles"
import { useNavigation,useNavigationBuilder } from "@react-navigation/native"
import FirebaseContext from "../context/firebase/firebaseContext"
import PedidosContext from "../context/pedidos/pedidosContext"

const Menu = () => {
    const navigation = useNavigation();
    const{menu, obtenerProductos } = useContext(FirebaseContext)
    const{seleccionarPlatillo } = useContext(PedidosContext)
    useEffect(()=>{
        obtenerProductos()
    }, [])

    return (
        <View>
            <Text>Componente detalle plato</Text>
        </View>
    )
}

export default Menu;
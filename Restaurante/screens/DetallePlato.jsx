import React, { useContext } from "react"
import {View, Text} from "react-native"
import {Box, Container, HStack} from 'native-base'
import { Card } from "react-native-paper"

import PedidosContext from "../context/pedidos/pedidosContext"
import globalStyles from "../styles/globalStyles"

const DetallePlato = () => {

    const { pedido } = useContext(PedidosContext)
    const { Cedula, nomCarro } = pedido
return (

    <Box style={globalStyles.contenedor}>
        <Text>
            {nomCarro}
        </Text>
        <Card>
            <CardTitle/>
        </Card>
    </Box>
)
}

export default DetallePlato;
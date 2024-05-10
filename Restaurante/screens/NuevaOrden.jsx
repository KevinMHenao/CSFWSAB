import React from 'react'
import { View, StyleSheet} from 'react-native'
import globalStyles from '../styles/globalStyles'
import { Container, Button, Text} from 'native-base'
import { useNavigation } from "@react-navigation/native"

const NuevaOrden = () => {
    const navigation = useNavigation();
    return (
         <Container styles= {globalStyles.contenedor}>
               <View style={[globalStyles.contenido, styles.contenidoView]}>
                <Button
                style = {globalStyles.button}
                rounded={'full'}
                onPress={()=> navigation.navigate('Menu')}
                > 
                    <Text style={globalStyles.buttonText}>Crear una orden</Text>   

                </Button>
               </View>
            </Container>

    )
}

const styles = StyleSheet.create({
    contenidoView: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default NuevaOrden;   
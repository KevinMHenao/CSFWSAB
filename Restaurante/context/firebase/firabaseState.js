import React, { useReducer } from "react"
import firebase from "../../firebase"
import FirebaseContext from "./firebaseContext"
import firebaseReducer from "./firebaseReducer"
import { OBTENER_PRODUCTOS_EXITO } from "../../types"
import _ from 'lodash'


const FirebaseState = props => {
    const inicialState = {
        menu: []
    }
    const [state, dispatch] = useReducer(firebaseReducer, inicialState)
    const obtenerProductos =()=>{
        firebase.db
            .collection('s')
            .onSnapshot(manejarSnapshot)

            function manejarSnapshot(snapshot){
                let plato = snapshot.docs.map(doc=>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                });
                plato = _.sortBy(plato, 'categoryScrollView')
                dispatch({
                    type: OBTENER_PRODUCTOS_EXITO,
                    payload:plato
                })
            }
    }
    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;
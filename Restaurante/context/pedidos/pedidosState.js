import React, { useReducer } from "react"
import PedidosContext from "./pedidosContext"
import PedidosReducer from "./pedidosReducer"
import { SELECCIONAR_PRODUCTOS } from "../../types"

const PedidoState= props =>{
    const initialState={
        pedido:[],
        platillo: null
    }


    const[state, dispatch] = useReducer(PedidosReducer, initialState)

    const seleccionarPlatillo = platillo =>{
        dispatch({
            type: SELECCIONAR_PRODUCTOS,
            payload: platillo
        })
    
    }

    return(
        <PedidosContext.Provider
        value={{
            pedido: state.pedido,
            platillo: state.platillo,
            seleccionarPlatillo
        }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}
export default PedidoState;
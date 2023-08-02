import React, { useReducer } from 'react';

const initialState = {
  contador: 0,
}
// los | significa o de puede ser un tipo u otro
type ActionType =
|{ type: 'incrementar' }
|{ type: 'decrementar' }
|{ type: 'reiniciar' }
|{ type: 'custom', payload: number }


// es solo un nombre, podría llamarse cambiar estado
// Recibe 2 argumentos
// el reducer siempre devuelve un estado nuevo "return state"
// en return no trabajamos con el state, le hacemos una copia con ...state, de esta manera rompelos con la referencia al original
const contadorReducer = ( state: typeof initialState, action : ActionType ) => {
  switch (action.type) {
    case 'incrementar': return {
      ...state,
      contador: state.contador +1
    }
    case 'decrementar': return { ...state, contador: state.contador -1 }
    case 'reiniciar': return { ...state, contador: state.contador = 0 }
    case 'custom': return { ...state, contador: action.payload }
    default: return state;
  }
  return state;
}

export const ContReducer = () => {
  const [stateContador, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h2>Contador: {stateContador.contador}</h2>
      <hr />
      <button
        onClick={ () => dispatch({ type: 'incrementar'})}
        className='btn btn-primary'
      >+1</button>

      <button
        onClick={ () => dispatch({ type: 'decrementar'})}
        className='btn btn-primary'
      >-1</button>

      <button
        onClick={ () => dispatch({ type: 'reiniciar'})}
        className='btn btn-primary'
      >0</button>
      <button
        onClick={ () => dispatch({ type: 'custom', payload: 50})}
        className='btn btn-primary'
      >custom</button>
    </>
  )
}

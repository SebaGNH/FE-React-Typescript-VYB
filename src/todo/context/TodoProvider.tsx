import React from 'react'
import { TodoContext } from './TodoContext'
import { TodoStateI } from '../interfaces/interfaces';
// recibe los hijos que serán renderizados adentro

interface TodoProviderProps {
  // Permitimos 1 o varios "|" de esta manera el <TodoProvider> de <Todo /> no se quejará al tener varios elementos "h1 + ul"
  children: JSX.Element | JSX.Element[];
}

// si aplicamos la interface no tenemos el contenido, podemos posicionarnos sobre INITIAL_STATE  CTRL + . y podemos autocompletarlas.
const INITIAL_STATE: TodoStateI = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc:'Recolectar las piedras',
      completed: false
    },
    {
      id: '2',
      desc:'RPiedra del alma',
      completed: false
    }
],
  completed: 0,
  pending: 2
}

export const TodoProvider = ({children} : TodoProviderProps) => {
  return (
    <TodoContext.Provider value={{}}>
      {children}
    </TodoContext.Provider>
  )
}

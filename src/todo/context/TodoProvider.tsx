import React from 'react'
import { TodoContext } from './TodoContext'
// recibe los hijos que serán renderizados adentro

interface TodoProviderProps {
  // Permitimos 1 o varios
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({children} : TodoProviderProps) => {
  return (
    <TodoContext.Provider value={{}}>
      {children}
    </TodoContext.Provider>
  )
}

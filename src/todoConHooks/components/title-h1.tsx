import React from 'react'
import { useTodos } from '../hooks/useTodos'

export const TitleH1 = () => {
  const { pendingTodos } = useTodos();
  // console.log(pendingTodos)
  return (
    <h1>Todo con Hooks: {pendingTodos}</h1>
  )
}

import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodos = () => {
  const { state, toggleTodo } = useContext( TodoContext )
  const { todos } = state;

  return {
    todos: todos,
    pendingTodos: todos.filter( todo => !todo.completed).length, // los falsos
    toggleTodo
  }
}

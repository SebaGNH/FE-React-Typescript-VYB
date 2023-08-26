import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoStateI } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';
// recibe los hijos que serán renderizados adentro

// Permitimos 1 o varios "|" de esta manera el <TodoProvider> de <Todo /> no se quejará al tener varios elementos "h1 + ul"
interface TodoProviderProps {
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
      desc:'Piedra del alma',
      completed: false
    }
],
  completed: 0,
  pending: 2
}

export const TodoProvider = ({children} : TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload:{id: id}})
  }
  return (
    <TodoContext.Provider value={{state, toggleTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

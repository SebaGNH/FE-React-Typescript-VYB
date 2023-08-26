import { TodoI, TodoStateI } from "../interfaces/interfaces"

type TodoActionT =
  | { type: 'addTodo', payload: TodoI}
  | { type: 'toggleTodo', payload: { id: string} }

export const todoReducer = (state: TodoStateI, action: TodoActionT): TodoStateI => {
  console.log(action);
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
      case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map( ({...todo}) => { // regresamos nuevos todo
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }

    default:
      return state;
  }

}

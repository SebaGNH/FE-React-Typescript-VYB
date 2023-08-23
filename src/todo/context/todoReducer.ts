import { TodoI, TodoStateI } from "../interfaces/interfaces"

type TodoActionT =
  | { type: 'addTodo', payload: TodoI}
  | { type: 'toggleTodo', payload: { id: string} }

export const todoReducer = (state: TodoStateI, action: TodoActionT): TodoStateI => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
      break;

    default:
      return state;
  }

}

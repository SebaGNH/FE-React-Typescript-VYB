import { createContext } from "react";
import { TodoStateI } from '../interfaces/interfaces';
// el context debe ser capaz de distribuir la información del estado sin importar que tan anidados estén los componentes para no tener que enviarlos por los props
// TodoContext Tiene toda la información de lo que quiero compartir en mis componentes


export type TodoContextPropsT = {
  state: TodoStateI;
  toggleTodo: ( id: string ) => void
}

export const TodoContext = createContext<TodoContextPropsT>({

} as TodoContextPropsT);



























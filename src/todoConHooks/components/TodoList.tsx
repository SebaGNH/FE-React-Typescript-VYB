// import { useContext } from 'react'
// import { TodoContext } from '../context/TodoContext'
import { RowTodoItem } from './row-Todo-Item';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
  // const {state} = useContext(TodoContext);
  // console.log('state', state);
  // Object { todoCount: 2, todos: (2) […], completed: 0, pending: 2 }

  // const {todos} = state;
  // console.log(todos); // Array [ {…}, {…} ]

  //con hook
  const { todos } = useTodos();
  return (
    <ul>
      {
        todos.map( item => <RowTodoItem item={item} key={item.id} /> )
      }
    </ul>
  )
}

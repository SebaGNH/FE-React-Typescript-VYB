import { TodoContext } from '../context/TodoContext';
import { TodoI } from '../interfaces/interfaces';
import { useContext } from 'react';

interface PropsI {
  item: TodoI;
}

export const RowTodoItem = ({item}: PropsI) => {
  // console.log(item) // Object { id: "1", desc: "Recolectar las piedras", completed: false }

  const { toggleTodo } = useContext( TodoContext );

  const handleOnDoubleClick = () => {
    // console.log('handleOnDoubleClick', item.desc);
    toggleTodo(item.id);
  }

  return (
    <li
      onDoubleClick={handleOnDoubleClick}
      className={`btn btn-primary mx-2
        ${item.completed ? 'text-decoration-line-through' : 'text-decoration-none'}`}
    >
      {item.desc}
    </li>
  )
}

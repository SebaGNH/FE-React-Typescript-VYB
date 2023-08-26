import { TodoList } from './components/TodoList';
import { TitleH1 } from './components/title-h1';
import { TodoProvider } from './context/TodoProvider';

export const TodoHooks = () => {
  return (
    <TodoProvider>
      <TitleH1 />
      <TodoList />
    </TodoProvider>
  )
}

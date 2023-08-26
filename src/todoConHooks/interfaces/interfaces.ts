export interface TodoI {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoStateI {
  todoCount: number;
  todos: TodoI[];
  completed: number;
  pending: number;
}
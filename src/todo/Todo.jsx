import { TodoList } from "./components/TodoList"
import { TitleTodos } from "./components/TitleTodos"

import { TodoProvider } from "./context/TodoProvider"


export const Todo = () => {
  return (
    <TodoProvider>
        <h1>Todo: </h1>
        <TitleTodos />
        <TodoList />
    </TodoProvider>

  )
}

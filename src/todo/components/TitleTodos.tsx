import { useTodos } from "../hooks/useTodos"


export const TitleTodos = () => {

    const { pendingTodos } = useTodos();

  return (
    <h1>
        todos: { pendingTodos }
    </h1>
  )
}
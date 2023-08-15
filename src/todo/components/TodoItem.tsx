
import { Todo } from "../interfaces/interfaces"


interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props ) => {
  
    const handleDBClick = () => {
        console.log('handleDBClick;', todo.desc);
        
    }

    return(

        <li onDoubleClick={ handleDBClick }>
            { todo.desc }
        </li>
    )
}

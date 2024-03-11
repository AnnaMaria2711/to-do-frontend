
import {Todo} from "./Todo.ts";
import {TodoStatus} from "./TodoStatus.ts";
import TodoCard from "./assets/TodoCard.tsx";
type Props = {
    status: TodoStatus,
    todos: Todo[],
    onTodoItemChange: () => void
}

export default function TodoColumn(props: Props) {
    return (
        <div>
            <div>
            <h2>{props.status}</h2>
            {
                props.todos.map(todo => <TodoCard todo={todo} key={todo.id} onTodoItemChange={props.onTodoItemChange}/>)
            }
            </div>
        </div>
    );
}
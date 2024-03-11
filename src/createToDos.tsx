
import {useState} from "react";
import {Todo} from "./Todo.ts";
import {EveryTodoStatus} from "./TodoStatus.ts";
import axios from "axios";
type Props = {
    action : (newValue: Todo) => void
}
function CreateTodo(props : Props) {
    const [form, setForm] = useState<Todo>({
        id: "",
        description: "",
        status: EveryTodoStatus[0],
    })

    const onChangeValues = (name: string, value: string) => {
        const newValue: Todo = {
            ...form,
            [name]: value
        };
        setForm(newValue);

    }
    return <form onSubmit={(e) => {
        e.preventDefault();
        console.log(form)
        axios.post("/api/todo",
            {
                description: form.description,
                status: form.status,
            } as Todo)
            .then(props.action)
    }}>
        <input placeholder={"id"} name="id" type="text" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input placeholder={"description"} name="description" type="text" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input placeholder={"Hier bitte Status eintragen"} name="status" type="text" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>

        <button type="submit"> Save To-Do</button>
    </form>


}
export default CreateTodo
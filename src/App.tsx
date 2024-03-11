
import './App.css'
import axios from "axios"
import {Todo} from "./Todo.ts";
import {useEffect, useState} from "react";
import {EveryTodoStatus} from "./TodoStatus.ts";
import TodoColumn from "./StatusColumn.tsx";
import CreateTodo from "./createToDos.tsx";

  function App() {


    const [todos, setTodos] = useState<Todo[]>()

    function collectTodos() {
      axios.get("api/todo").then((res) => {
            setTodos(res.data)
          })
    }
    useEffect(collectTodos, [])

    if (!todos) {
      return "No Todos:("
    }
    return (
        <div style={{display: "flex", flexDirection : "column", height: "90vh",  justifyContent: "space-between", alignItems : "center"}}>
      <div style={{display:"flex", flexDirection : "row", gap: "20px", justifyContent: "space-around", alignItems: "flex-start" }}>
          {EveryTodoStatus.map(status => {
                  const filteredTodos = todos.filter(todo => todo.status === status)
                  return <TodoColumn
                      status={status}
                      todos={filteredTodos}
                      onTodoItemChange={collectTodos}
                      key={status}
                  />
              })
          }
      </div>
          <CreateTodo action={collectTodos}></CreateTodo>
          </div>
    )
  }

export default App

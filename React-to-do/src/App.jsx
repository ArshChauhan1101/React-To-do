import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruites',
    'Pick Kids from school'
  ])

  function handleAddTodos(newTodo)
  {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos = {handleAddTodos}/>
      <TodoList todos = {todos}/>
    </>
  )
}

export default App

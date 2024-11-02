import { useEffect, useState } from 'react'
import { useTheme } from "../src/context/ThemeContext"
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
  const incompleteCount = todoList.filter(todo => todo.status === "incomplete").length;
  const { theme, toggleTheme } = useTheme();

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const addNewTodo = () => {
    if (inputValue !== "") {
      setTodoList([...todoList, { text: inputValue, status: "incomplete" }])
      setInputValue("")
    }
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, todoIndex) => todoIndex !== index))
  }

  const clearList = () => {
    setTodoList((todoList) => todoList.filter(todo => todo.status !== "complete"))
  }

  const completed = (index) => {
    setTodoList(todoList.map((todo, i) => 
        i === index ? { ...todo, status: "complete" } : todo
    ));
  }

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  return (
    <div className={`main ${theme}`}>
      <div className="container">
        <div className='nav' >
          <h1>TODO</h1>

          {theme === "dark" ? <img src='/assets/images/icon-sun.svg' onClick={toggleTheme} /> : <img src='/assets/images/icon-moon.svg ' onClick={toggleTheme} />}
        </div>
        <div className="todo">

          <div className={`new ${theme}`}>
            <div className="incomplete">
            </div>
            <div className={`input-new ${theme}`}>
              <input type='text' placeholder='Create a new todo...' value={inputValue} onChange={handleInputChange} />
            </div>
            <div className="add" onClick={addNewTodo}>
              <img src='/assets/images/icon-cross.svg' />
            </div>
          </div>
          {
            todoList.length > 0 ? (
              <div className={`list ${theme}`}>
                {todoList.map((item, index) => (
                  <TodoItem key={index} todo={item} remove={() => deleteTodo(index)} completed={() => completed(index)} />
                ))}

                <div className="stats">
                  <p>{incompleteCount} items left</p>

                  <p onClick={clearList}>Clear completed</p>
                </div>
              </div>
            ) : (
              <div className={`inactive ${theme}`}>
                <p>No tasks at the moment</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App

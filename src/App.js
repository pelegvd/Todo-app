import React , {useState} from 'react';
import './App.css';
import Header from "./component/Header";
import Form from "./component/Form";
import TodosList from "./component/TodosList";


const App=()=>{

    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    const [editTodo,setEditTodo]=useState(null);


  return (
      <div className="container">
        <div className="app-wrapper">
            <div>
                <Header/>
            </div>
            <div>
                <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                />
            </div>
            <div>
                <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
            </div>

        </div>

      </div>
  )
}

export default App;

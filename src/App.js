import React, {useState, useEffect} from 'react';
import './App.css';


// importing components

import Form from './components/form';
import TodoList from './components/TodoList';

function App() {
  
  //State Stuff
  const [inputText, setInputText]= useState("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus]= useState ('all');
  const [filterTodos, setFilterTodos] = useState ([]);


  

  //use EFFECT
  useEffect (() => {
    filterHandler();
   }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status){
      case 'completed' : 
      setFilterTodos(todos.filter(todo => todo.completed === true ))
      break;
      case 'uncompleted' :
      setFilterTodos(todos.filter(todo => todo.completed === false ))
      break;
      default: 
      setFilterTodos (todos);
      break;
    }
  };

  

  return (
    <div className="App">
      <header>
        <h1> ToDo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText = {setInputText}
      setStatus = {setStatus}
      />
      <TodoList 
      filterTodos= {filterTodos}
      setTodos={setTodos} 
      todos={todos}/>
    </div>
  );
}

export default App;

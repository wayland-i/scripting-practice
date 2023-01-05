import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        const firstTen = json.slice(0, 10);

        setTodos(firstTen);
      })
  },[])

  return (
    <ul>
        {todos.map(todo => <li>{todo.title}</li>)}
    </ul>
    
  );
}

export default App;

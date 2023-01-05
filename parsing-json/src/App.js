import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        const firstTen = json.slice(0, 10);

        setTodos(firstTen);
      })
  },[])

  return (
    <ul>
        {todos.map(todo => <pre>{JSON.stringify(todo)}</pre>)}
    </ul>
    
  );
}

export default App;

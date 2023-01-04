import './App.css';
import Header from './components/Header';
import About from './components/About';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <h1>home</h1>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

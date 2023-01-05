import { Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/calculator'>
          <Calculator />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

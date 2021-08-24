import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home.js';
import Four from './components/Four.js'
import Color from './components/Color.js'
import Hello from './components/Hello.js'

function App() {
  return (
    <div className="App">
      <Router>
          <Home path="/home" />
          <Four path="/4" />
          <Hello path="/hello" />
          <Color path="/hello/blue/red" />
      </Router>
    </div>
  );
}

export default App;

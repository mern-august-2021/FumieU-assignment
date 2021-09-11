import React from 'react';
import { Router } from '@reach/router'; 
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/authors"/>
        <New path="/authors/new"/>
        <Edit path="/authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

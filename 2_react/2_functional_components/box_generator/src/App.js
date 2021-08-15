import React, {useState} from 'react';
import ColorForm from './components/ColorForm.js';
import DisplayColor from './components/DisplayColor.js';
import './App.css';

function App() {
  const [colorList, setColorList] = useState([]);
    

  return (
    <div className="App">
      <ColorForm colorList={ colorList } setColorList={ setColorList }/>
      <DisplayColor colorList={ colorList } />
    </div>
  );
}

export default App;
import React, {useState} from 'react';
import './App.css';
import Display from './components/Display.js';
import Tabs from './components/Tabs';

function App() {
  const [tabList] = useState([
    {
      label: "Tab 1",
      content: "Content of Tab 1"
    },
    {
      label: "Tab 2",
      content: "Content of Tab 2"
    },
    {
      label: "Tab 3",
      content: "Content of Tab 3"
    }
  ]);
  const [activeTab, setActiveTab] = useState(1)
  
  


  return (
    <div className="App">
      <Tabs activeTab = {activeTab} setActiveTab = {setActiveTab} tabList = {tabList}/>
      <Display activeTab = {activeTab} tabList = {tabList}/>
      
    </div>
  );
}

export default App;

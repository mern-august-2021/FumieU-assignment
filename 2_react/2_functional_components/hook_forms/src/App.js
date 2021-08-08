import UserForm from './components/UserForm.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForm 
          firstName = {""}
          lastName = {""}
          email = {""}
          password = {""}
          confirmPassword = {""}/>
    </div>
  );
}

export default App;

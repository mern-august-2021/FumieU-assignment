import './App.css';
import mern from './images/mern.jpeg';

function App() {
  return (
    <div className="App">
      <nav className="w-100 bg-gray-200 p-20">
        <ul className="flex justify-start lg:justify-around ">
          <li className="lg:flex bg-white border p-5 rounded">Home</li>
          <li className="lg:flex bg-white border p-5 rounded">Contact</li>
          <li className="lg:flex bg-white border p-5 rounded">About</li>
        </ul>
      </nav>
      <div className="relative h-auto">
        <h1 className="absolute text-blue text-bold text-xl md:text-5xl lg:text-7xl top-10 left-4">Hero Image</h1>
        <img src={mern} className="border-t-8 border-double border-black h-auto"></img>
      </div>
        <form className="flex flex-col my-6">
          <h2 className="text-4xl my-5">Log In:</h2>
          <div className="flex justify-center">
            <label className="m-4 w-24" htmlFor="">Name</label>
            <input className="border m-4 shadow-md rounded" type="text"/>
          </div>
          <div className="flex justify-center">
            <label className="m-4 w-24" htmlFor="">Email</label>
            <input className="border m-4 shadow-md rounded" type="text"/>
          </div>
          <div className="flex justify-center">
            <label className="m-4 w-24" htmlFor="">Password</label>
            <input className="border m-4 shadow-md rounded" type="text"/>
          </div>
          <bottun className="bg-blue-400 hover:bg-blue-700 text-white rounded font-bold py-2 px-4 w-24 mx-auto shadow-lg">Log in</bottun>
        </form>

    </div>
  );
  }

export default App;

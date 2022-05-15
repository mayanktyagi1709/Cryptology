import './App.css';
import { Navbar }  from './components';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main"></div>
      <div className="footer"></div>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details/Details';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:id" element={<Details/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Home from './components/Home';
import {  Route, Routes } from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
     
    <div className="App">
        <Navbar />
        <div className="content">
    
          <Routes>
            <Route  path= "/Home" element={<Home/>}></Route>
            <Route path="/Create" element={<Create/>}></Route>
          </Routes>
        
        </div>
      </div>
  );
}

export default App;





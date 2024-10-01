import React from 'react';
import './App.css';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Homepage from './Component/Homepage';
import Banktransfer from './Component/Banktransfer';
import Online from './Component/Online';
import Selftransfer from './Component/Selftransfer';
import Notfound from './Component/Notfound';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Homepage" element={<Homepage/>}/>
          <Route path="/Banktransfer" element={<Banktransfer/>}/>
          <Route path="/Online" element={<Online/>}/>
          <Route path="/Selftransfer" element={<Selftransfer/>}/>
          <Route path="*"element={<Notfound/>}/>
        </Routes>
      </Router>
    )
}

export default App;

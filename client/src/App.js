
import './App.css';
import LoginForm from './components/login';
import {Routes, Route, Link} from "react-router-dom";
import React, {useState} from 'react';
function App() {
  // const [user, setUser] = useState(null);

  return (
    <div className='main'>
      <nav>
        
      </nav>
      <Routes>
        <Route exact path='/login' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;

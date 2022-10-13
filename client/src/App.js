
import './App.css';
import LoginForm from './components/loginform';
import {Routes, Route, Link} from "react-router-dom";

function App() {
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

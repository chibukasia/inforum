import LoginForm from './components/loginform';
import {Routes, Route} from "react-router-dom";
import SignUp from './components/signup';

function App() {
  return (
    <div className='main'>
      <nav>
        
      </nav>
      <Routes>
        <Route exact path='/login' element={<LoginForm/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

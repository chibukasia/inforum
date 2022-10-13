
import './App.css';
import LoginForm from './components/login';
import {Routes, Route, Link} from "react-router-dom";
import Blogs from './components/blogs';
import Blog from './components/blog';
import { useEffect, useState } from 'react';
import AddBlog from './components/addblog'; 
import SignUp from './components/signup'

function App() {
  const [blogs, setBlogs] = useState([]) 
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null);


  useEffect(()=>{
    fetch("/blogs")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  }, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }); 
  }, []);
  return (
    <div className='main'>
      <nav>
      </nav>

      <Routes>
        <Route exact path='/login' element={<LoginForm onLogin={setUser}/>}/>
        <Route exact path='/blogs' element={<Blogs blogs={blogs} setSearch={setSearch} search={search}/>}/>
        <Route exact path='/addblog' element={<AddBlog setBlogs={setBlogs} user={user}/>}/>
        <Route exact path='/:id' element={<Blog blogs={blogs} user={user}/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

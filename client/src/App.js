
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

  useEffect(()=>{
    fetch("/blogs")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  }, [])
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/blogs" className="nav-item">Blogs</Link>
        <Link to="/addblog" className="nav-item">Write</Link>
        <Link to="/signup" className="nav-item">Sign Up</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
    <div className='main'>
      <Routes>
        <Route exact path='/login' element={<LoginForm/>}/>
        <Route exact path='/blogs' element={<Blogs blogs={blogs} setSearch={setSearch} search={search}/>}/>
        <Route exact path='/addblog' element={<AddBlog setBlogs={setBlogs}/>}/>
        <Route exact path='/blogs/:id' element={<Blog blogs={blogs}/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
    </div>
      
  );
}

export default App;


import './App.css';
import LoginForm from './components/login';
import {Routes, Route, Link} from "react-router-dom";
import Blogs from './components/blogs';
import Blog from './components/blog';
import { useEffect, useState } from 'react';
import AddBlog from './components/addblog';

function App() {
  const [blogs, setBlogs] = useState([]) 
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch("/blogs")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  }, [])

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

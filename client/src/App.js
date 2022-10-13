
import './App.css';
import LoginForm from './components/loginform';
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
        <Route exact path='/blogs' element={<Blogs blogs={blogs} setSearch={setSearch} search={search}/>}/>
        <Route exact path='/addblog' element={<AddBlog setBlogs={setBlogs}/>}/>
        <Route exact path='/:id' element={<Blog blogs={blogs}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

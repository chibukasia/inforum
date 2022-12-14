import './App.css';
import LoginForm from './components/login';
import {Routes, Route, Link} from "react-router-dom";
import Blogs from './components/blogs';
import Blog from './components/blog';
import { useEffect, useState } from 'react';
import AddBlog from './components/addblog'; 
import SignUp from './components/signup'
import Landing from './components/landing';
import EditBlog from './components/editblog';

function App() {
  const [blogs, setBlogs] = useState([]) 
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]) 

  useEffect(()=>{
    fetch("/blogs")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  }, [comments])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }); 
  }, []);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <>
    <div>
      <nav>
       
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/blogs" className="nav-item">Blogs</Link>
        {user ?(
        <>
          
          <Link to="/addblog" className="nav-item">Write</Link>
          <Link to="/" className="nav-item" onClick={handleLogoutClick}>Logout</Link>
        </>
        )
        :
        (
          <>
            <Link to="/signup" className="nav-item">Sign Up</Link>
            <Link to="/login" className="nav-item">Login</Link>
          </>
        )
        }
  
      </nav>

    <div className='main'>
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/login' element={<LoginForm onLogin={setUser}/>}/>
        <Route exact path='/blogs' element={<Blogs blogs={blogs} setSearch={setSearch} search={search} user={user}/>}/>
        <Route exact path='/addblog' element={<AddBlog setBlogs={setBlogs} blogs={blogs}/>}/>
        <Route exact path='/blogs/:id' element={<Blog blogs={blogs} user={user} setBlogs={setBlogs} comments={comments} setComments={setComments}/>}/>
        <Route exact path='/signup' element={<SignUp onLogin={setUser}/>}/>
        <Route exact path='/editblog/:id' element={<EditBlog blogs={blogs} setBlogs={setBlogs}/>}/>
      </Routes>
    </div>
    </div>
    </>
      
  );
}

export default App;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Blog from "./blog";

function BlogCard({ blog, user, blogs, setBlogs }) {
  const createdDate = new Date(blog.created_at).toLocaleDateString();
  const userNameFirstLetter = blog.user.username.substr(0, 1).toUpperCase();
  const navigate = useNavigate()

  function handleDelete(){
    fetch(`/blogs/${blog.id}`,{method: "DELETE"})
    .then(res=>{
      if(res.ok){
        res.json().then(()=>{
          const undeletedBlogs = blogs.filter(item=>item.id != blog.id)
          setBlogs(undeletedBlogs)
          navigate('/blogs')

        })
      }else{
        res.json().then(err=>err.errors)
      }
    })
  }
  // userNameFirstLetter
  return (
    <div className="blog-specific">
      <div className="blog-head">
        <div className="first-letter">{userNameFirstLetter}</div>
        <div className="blog-user-date">
          <h4>{blog.user.username}</h4>
          <p>{createdDate}</p>
        </div>
        <div className="blog-title">
            <h3>{blog.title}</h3>
        </div>
      </div>
      <div className="blog-summary">
          {blog.summary}
          <Link to={`/blogs/${blog.id}`}>Read More</Link>
      </div>
      <div>
        {user.id ==blog.user.id ? <Link to={`/editblog/${blog.id}`}><button className="btn btn-primary" type="button">Edit</button></Link> : null  }
        {user.id ==blog.user.id ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button> : null }
        
        
      </div>
    </div>
  );
}

export default BlogCard;

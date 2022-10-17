import React, { useState, useRef } from "react";
import {useNavigate} from "react-router-dom"
import Blogs from "./blogs";

function AddBlog({blogs, setBlogs}) {
  const [postData, setPostData] = useState({
      title: "",
      content: "",
      likes: 0,
      minutes_to_read: 0
  }) 
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()
  function handleChange(e){
      let name = e.target.name 
      let value = e.target.value

      setPostData({...postData, [name]: value })
  }

  const formReset = useRef()
  function handleSubmit(e){
      e.preventDefault()

      fetch("/blogs",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
      }).then((r) => {
      if (r.ok) {
          r.json().then(data=>setBlogs([...blogs, data ]))
        navigate("/blogs");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    formReset.current.reset()
  }
  return (
    <div className="form-div">
      <div>
        <h2>Share your idea</h2>
      </div>
      
      <form className="row g-3" id="blog-form" onSubmit={handleSubmit} ref={formReset}>
      <div>
        {errors.map((err) => (
            <p key={err} style={{color: "red"}}>{err}</p>
        ))}
      </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title here..."
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="minutes_to_read" className="form-label">
            Minutes To Read
          </label>
          <input
            type="number"
            className="form-control"
            id="minutes_to_read"
            name="minutes_to_read"
            placeholder="Minutes..."
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <input type={'submit'} value="Publish"/>
      </form>
    </div>
  );
}

export default AddBlog;

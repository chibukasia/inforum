import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function AddBlog() {
  const [postData, setPoastData] = useState({
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

      setPoastData({...postData, [name]: value })
  }

  function handleSubmit(e){
      e.preventDefault()
      console.log(postData) 

      fetch("/blogs",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
      }).then((r) => {
      if (r.ok) {
        navigate("/blogs");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="form-div">
      <div>
        <h2>Share your idea</h2>
      </div>
      
      <form className="row g-3" id="blog-form" onSubmit={handleSubmit}>
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

import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"

function EditBlog({blogs, setBlogs}){
    const [errors, setErrors] = useState([]);
    const params = useParams()
    const navigate = useNavigate()
    const blog = blogs.find(blogy=>blogy.id == params.id)
    const [updateData, setUpdateData] = useState({
        title: blog.title,
        minutes_to_read: blog.minutes_to_read,
        content: blog.content
    })

    function handleChange(e){
        let name = e.target.name 
        let value = e.target.value 

        setUpdateData({[name]: value})
    }


    function handleSubmit(e){
        e.preventDefault()
        fetch(`/blogs/${blog.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData)
        })
        .then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    const updatedBlogs = blogs.map(item=>{
                        if (item.id == data.id){
                            return data
                        }else{
                            return item
                        }
                    }) 
                    
                    setBlogs(updatedBlogs)
                    navigate('/blogs')
                    
                })
            }else{
                res.json().then(err=>setErrors(err.errors))
            }
        })
    }
    return(
        <div className="form-div">
      <div>
        <h2>Edit your blog</h2>
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
            value={updateData.title}
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
            value={updateData.minutes_to_read}
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
            value={updateData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <input type={'submit'} value="Update"/>
      </form>
    </div>
    )
}

export default EditBlog
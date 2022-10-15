import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Comment from "./comment";


function Blog({blogs, user}){

    const [comments, setComments] = useState([]) 

    const [blog, setBlog] = useState({
        id: 0,
        title: '',
        minutes_to_read: 0,
        likes: 0,
        content: '',
        created_at: '',
        comments: [],
        user: {
            id: 0,
            username: '',
            image_url:'',
            email:''
        }
    })
    const params = useParams()
    useEffect(()=>{
        fetch(`/blogs/${params.id}`)
        .then(res=>res.json())
        .then(data=> setBlog(data))
    },[])

    useEffect(()=>{
        fetch("/comments")
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])

    const filterdComments = comments.filter(comment=>comment.blog_id == params.id)
    // console.log(filterdComments)
    const blogComments = filterdComments.map(comment=>{
        return <Comment key={comment.id} comment={comment}/>
    })

    return(
        <div className="blog">
            <div className="blog-details">
                <h2>{blog.title}</h2>
                <h4>Author: {blog.user.username}</h4>
                {blog.created_at == '' ? null: <p>Written at: {new Date(blog.created_at).toLocaleString()}</p>}
                
                <p>{blog.minutes_to_read} Miuntes read</p>
                <p>{blog.content}</p>
                <h4>Comments</h4> 
                {blogComments}
            </div>
            
        </div>
    )
}

export default Blog
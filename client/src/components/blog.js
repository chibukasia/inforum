import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


function Blog({blogs}){
    const params = useParams()

    const blog = blogs.find(blogy=>blogy.id == 10)
    console.log(blog)

    return(
        <div>
            <h2>{blog.title}</h2>
            <h4>Author: {blog.user.username}</h4>
            <p>Written at: {new Date(blog.created_at).toLocaleString()}</p>
            <p>{blog.content}</p>
            <h4>Comments</h4> 
        </div>
    )
}

export default Blog
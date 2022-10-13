import React from "react";
import BlogCard from "./blogcard";
import Search from "./search";

function Blogs({blogs, search, setSearch}){

    const filteredBlogs = blogs.filter(blog=>blog.title.toLowerCase().includes(search.toLowerCase()))
    const blogsDisplay = filteredBlogs.map(blog=>{
        return <BlogCard key={blog.id} blog= {blog}/>
    })
    return(
        <div className="blog-main">
            <Search setSearch={setSearch}/>
            {blogsDisplay}
        </div>
    )
}

export default Blogs
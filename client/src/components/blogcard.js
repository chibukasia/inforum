import React from "react";
import { Link } from "react-router-dom";
import Blog from "./blog";

function BlogCard({ blog }) {
  const createdDate = new Date(blog.created_at).toLocaleDateString();
  const userNameFirstLetter = blog.user.username.substr(0, 1).toUpperCase();
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
    </div>
  );
}

export default BlogCard;

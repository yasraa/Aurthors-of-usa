// BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogs.css'

function BlogCard({ post }) {
  return (
    <>
    <div className="blog-card">
      <div className="card-image">
         {post.image && <img src={post.image} alt={post.title} style={{ width: "auto", height: "100px" }} />}
      </div>
     <div className="blog-card-details">
      <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
      <p>By {post.author} — {post.date}</p>
      </div>
      
    </div>
    <hr />
    </>
  );
}

export default BlogCard;
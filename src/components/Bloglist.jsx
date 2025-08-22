// BlogList.jsx
import React from 'react';
import BlogCard from './Blogcard';

function BlogList({ posts }) {
  return (
    <div>
      {posts.map(post => <BlogCard key={post.id} post={post} />)}
    </div>
  );
}
export default BlogList;
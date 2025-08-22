import React, { useState } from 'react';
import '../../styles/blogs.css'
import Nav from '../../components/Nav';
import BlogList from '../../components/Bloglist';
import Pagination from '../../components/Pagination';
import postsData from './post.json';

const POSTS_PER_PAGE = 5;

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const currentPosts = postsData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div >
      <Nav/>
      <div className='blog-page'>
      <header><h1>Latest Blogs</h1></header>
      <BlogList posts={currentPosts} />
      <Pagination current={currentPage} total={totalPages} onChange={setCurrentPage} />
      </div>
    </div>
  );
}

export default BlogsPage;

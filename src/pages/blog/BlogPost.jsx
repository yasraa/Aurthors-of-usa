import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./post.json"; // adjust path

function BlogPost() {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === parseInt(id));

  if (!post) return <h2>Blog not found</h2>;

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="blog-page" style={{ display: "flex", gap: "2rem" }}>
      {/* Table of Contents */}
      <aside className="toc" style={{ width: "250px", position: "sticky", top: "20px" ,height:"90vh"}}>
        <h3>Table of Contents</h3>
        <ul>
          {post.toc.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Blog Content */}
      <article style={{ flex: 1 }}>
        <h1>{post.title}</h1>
        <p>
          By {post.author} — {post.date}
        </p>
        {post.image && <img src={post.image} alt={post.title} style={{ width: "auto", height: "100px" }} />}

        {post.content.map((section) => (
          <section key={section.id} id={section.id} style={{ margin: "2rem 0" }}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </article>
    </div>
  );
}

export default BlogPost;

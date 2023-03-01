import React, { useRef } from "react";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function NewBlog() {
  const back = useNavigate();
  const myRef = useRef({
    id: crypto.randomUUID(),
    author: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    myRef.current = { ...myRef.current, [e.target.name]: e.target.value };
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myRef.current),
    });
    back("/");
  }
  return (
    <>
      <Helmet>
        <title>Create new blog!</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className={style.titleAdd}>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.newBlogContainer}>
          <label>Blog Title</label>
          <input
            type="text"
            placeholder="Title.."
            name="title"
            onChange={handleChange}
            className={style.newBlogInput}
          />

          <label>Blog Body</label>
          <textarea
            placeholder="Body.."
            onChange={handleChange}
            name="body"
            rows={4}
            className={style.newBlogInput}
          />

          <label>Blog Author</label>
          <input
            type="text"
            placeholder="Author.."
            onChange={handleChange}
            name="author"
            className={style.newBlogInput}
          />
          <button type="submit">Add blog</button>
        </div>
      </form>
    </>
  );
}

export default NewBlog;

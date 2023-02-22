import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";

function SingleBlog() {
  const back = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    error,
    loading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });
      back("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.singleBlogContainer}>
      <div className={style.title}>Title : {blog?.title}</div>
      <div className={style.author}> Author : {blog?.author}</div>
      <div className={style.body}>{blog?.body}</div>
      <button onClick={() => handleClick()} className={style.button}>
        Delete
      </button>
    </div>
  );
}

export default SingleBlog;

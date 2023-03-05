import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

function SingleBlog() {
  const back = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, activeBlog: blog, error } = useSelector((state) => state);

  useEffect(() => {
    async function getData() {
      try {
        dispatch({
          type: "LOADING",
          payload: loading,
        });

        const response = await fetch(`http://localhost:8000/Blogs/${id}`);
        const data = await response.json();
        if (data) {
          dispatch({
            type: "FETCH_SINGLE",
            payload: data,
          });
        }
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: error,
        });
      }
    }
    getData();
    if (error) {
      return <h3 className={style.loading}>Error fetching data!</h3>;
    }

    return () => {
      dispatch({
        type: "CLEAN",
      });
    };
  }, []);
  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      back("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.singleBlogContainer}>
      <Helmet>
        <title>Single blogs!</title>
      </Helmet>
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

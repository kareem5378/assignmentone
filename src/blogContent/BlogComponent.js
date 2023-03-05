import React, { memo } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.css";
// <BlogComponent blog={blog} key={blog.id} />
function BlogComponent({ blog }) {
  const [title, setTitle] = useState("");
  const [newData, setNewData] = useState(null);
  const [dataToEdit, setDataToEdit] = useState([]);
  const [refresh, setRefresh] = useState(true);

  function close(blog_id) {
    setDataToEdit((prev) => {
      let retArray = prev?.filter((id) => id !== blog_id);
      return retArray === "" ? [] : retArray;
    });
  }
  const handleSubmit = async () => {
    try {
      await fetch(`http://localhost:8000/Blogs/${newData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
    } catch (error) {
      console.log(error);
    }
    setRefresh(!refresh);
  };
  useEffect(() => {
    if (newData) {
      handleSubmit();
    }
  }, [newData]);

  return (
    <div>
      <div key={blog?.id} className={style.blogItem}>
        {!dataToEdit?.includes(blog?.id) ? (
          //
          <div>
            <span className={style.title}>
              <Link to={`/SingleBlog/${blog?.id}`}>
                <h3>{blog?.title}</h3>
              </Link>
              <RiEdit2Line
                size={25}
                onClick={() => {
                  setDataToEdit((prev) => [...prev, blog?.id]);
                  setTitle(blog?.title);
                }}
              />
            </span>
          </div> //
        ) : (
          <span>
            <input
              type={"text"}
              defaultValue={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <AiOutlineCheck
              size={25}
              onClick={() => {
                setNewData({ ...blog, title: title });
                close(blog?.id);
              }}
              className={style.check}
            />
            <AiOutlineClose
              size={25}
              id="close"
              onClick={() => {
                close(blog?.id);
              }}
              className={style.unCheck}
            />
          </span>
        )}
        <p className={style.author}> By :{blog?.author}</p>
        <p className={style.body}>{blog?.body}</p>
      </div>
    </div>
  );
}
export default memo(BlogComponent);

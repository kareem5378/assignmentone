import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from "./styles.module.css";

function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [newData, setNewData] = useState(null);
  const [dataToEdit, setDataToEdit] = useState([]);
  const { data: blogs, loading } = useFetch(
    "http://localhost:8000/Blogs",
    refresh
  );
  function close(blog_id) {
    setDataToEdit((prev) => {
      let retArray = prev?.filter((id) => id !== blog_id);
      return retArray === "" ? [] : retArray;
    });
  }
  useEffect(() => {
    if (newData) handleSubmit();
  }, [newData]);
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
  if (loading) return <h3 className={style.loading}> Loading... </h3>;
  return (
    <div className={style.blogContainer}>
      <input
        type={"text"}
        placeholder="Search... "
        onChange={(e) => setSearchTerm(e.target.value)}
        className={style.search}
      />
      {blogs
        ?.filter((blog) =>
          blog.title?.toLowerCase().includes(searchTerm?.toLowerCase())
        )
        ?.map((blog, i) => (
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
        ))}
    </div>
  );
}

export default BlogContent;

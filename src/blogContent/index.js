import { useEffect, useMemo, useState } from "react";
import style from "./styles.module.css";
import { Helmet } from "react-helmet";
import BlogComponent from "./BlogComponent";
import { useSelector, useDispatch } from "react-redux";

function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { loading, blogs, error } = useSelector((state) => state);
  const searchedBlogs = useMemo(() => {
    return blogs?.filter((blog) => {
      return blog.title?.toLowerCase().includes(searchTerm?.toLowerCase());
    });
  }, [blogs, searchTerm]);

  useEffect(() => {
    {
      getData();
    }
    return () => {};
  }, []);
  async function getData() {
    try {
      dispatch({
        type: "LOADING",
        payload: loading,
      });

      const response = await fetch("http://localhost:8000/Blogs");
      const data = await response.json();
      if (data) {
        dispatch({
          type: "FETCH_ALL",
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
  if (loading) {
    return <h3 className={style.loading}>Loading... </h3>;
  }
  if (error) {
    return <h3 className={style.loading}>Error fetching data!</h3>;
  }

  return (
    <div className={style.blogContainer}>
      <Helmet>
        <title>All blogs!</title>
      </Helmet>
      <input
        type={"text"}
        placeholder="Search... "
        onChange={(e) => setSearchTerm(e.target.value)}
        className={style.search}
      />
      {searchedBlogs?.map((blog) => (
        <BlogComponent blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogContent;

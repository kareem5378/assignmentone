import useFetch from "../customHooks/useFetch";
import { useCallback, useMemo, useState } from "react";
import style from "./styles.module.css";
import { Helmet } from "react-helmet";
import BlogComponent from "./BlogComponent";

function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: blogs, loading } = useFetch("http://localhost:8000/Blogs");
  const searchedBlogs = useMemo(() => {
    return blogs?.filter((blog) => {
      return blog.title?.toLowerCase().includes(searchTerm?.toLowerCase());
    });
  }, [blogs, searchTerm]);


  if (loading) return <h3 className={style.loading}> Loading... </h3>;

  return (
    <div className={style.blogContainer}>
      <Helmet>
        <title>All blogs!</title>
        <link rel="canonical" href="http://mysite.com/example" />
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

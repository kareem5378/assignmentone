import "./style.css";

function blogContent({ blogsContent, loading }) {
  return (
    <>
      <div className="blogContainer">
        {loading ? (
          <p>Loading....</p>
        ) : (
          blogsContent.map((blog) => (
            <div key={blog.key}>
              <div className="title">Title : {blog.title}</div>
              <div className="author"> By : {blog.author}</div>
              <div className="body">{blog.body}</div>
              <br />
            </div>
          ))
        )}

        <br />
      </div>
    </>
  );
}

export default blogContent;

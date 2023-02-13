import React from "react";
import "./styles.css";

function index() {
  return (
    <>
      <div className="container">
        <h2>Estarta Blog</h2>
        <div className="smallerContainer">
          
          <a href="/" className="home">
            Home
          </a>

          <button>
            <a href="/" className="newBlog">
              New Blog
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default index;

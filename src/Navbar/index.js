import React from "react";
import style from "./styles.module.css";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <div className={style.container}>
        <Link className={style.navHome} to={"./"}>
          <h2>Estarta Blog</h2>
        </Link>
        <div className={style.smallerContainer}>
          <Link className={style.navButton} to={"./"}>
            Home
          </Link>
          <Link className={style.navButton} to={"./NewBlog"}>
            New Blog
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;

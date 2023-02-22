import React from "react";
import styles from "./style.module.css";

function errorPage() {
  return (
    <div className={styles.errorContainer}>
      404 <br />
      Not found
    </div>
  );
}

export default errorPage;

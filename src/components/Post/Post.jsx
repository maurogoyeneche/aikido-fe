import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./Post.module.css";

function Post() {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.cardImg}>
          <img className="" src="/img/clasesAJU.jpg" alt="clases en AJU" />
        </div>
        <div className={styles.newsCardBody}>
          <div className={styles.newsTitle}>Post Title</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            iure deserunt, sequi aspernatur vitae, iste quae eos dignissimos aut
            at, necessitatibus autem earum fugiat inventore temporibus minus
            quod hic expedita. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus amet dolorum sequi, facere commodi fuga
            natus nisi eaque dolorem mollitia soluta nulla temporibus alias sint
            odit, distinctio culpa officiis vitae!
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;

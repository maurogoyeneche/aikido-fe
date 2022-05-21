import React from "react";
// import { Button, Card } from "react-bootstrap";
import styles from "./Post.module.css";

function Post() {
  return (
    <>
      <article className={styles.cardGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img className="" src="/img/clasesAJU.jpg" alt="clases en AJU" />
          </div>
          <div className={styles.cardBody}>
            <div className={`${styles.cardTitle} text-center`}>Post Title</div>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              iure deserunt, sequi aspernatur vitae, iste quae eos dignissimos
              aut at, necessitatibus autem earum fugiat inventore temporibus
            </p>
          </div>
          <div className={styles.cardFooter}>
            <span>
              <i className="fas fa-user-circle"></i>
            </span>
            <span>
              <i className="fas fa-calendar-alt"></i>
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img className="" src="/img/clasesAJU.jpg" alt="clases en AJU" />
          </div>
          <div className={styles.cardBody}>
            <div className={`${styles.cardTitle} text-center`}>Post Title</div>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              iure deserunt, sequi aspernatur vitae, iste quae eos dignissimos
              aut at, necessitatibus autem earum fugiat inventore temporibus
            </p>
          </div>
          <div className={styles.cardFooter}>
            <span>
              <i className="fas fa-user-circle"></i>
            </span>
            <span>
              <i className="fas fa-calendar-alt"></i>
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img className="" src="/img/clasesAJU.jpg" alt="clases en AJU" />
          </div>
          <div className={styles.cardBody}>
            <div className={`${styles.cardTitle} text-center`}>Post Title</div>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              iure deserunt, sequi aspernatur vitae, iste quae eos dignissimos
              aut at, necessitatibus autem earum fugiat inventore temporibus
            </p>
          </div>
          <div className={styles.cardFooter}>
            <span>
              <i className="fas fa-user-circle"></i>
            </span>
            <span>
              <i className="fas fa-calendar-alt"></i>
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Post;

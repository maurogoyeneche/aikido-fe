import React from "react";
import { Card } from "react-bootstrap";
import "./Post.module.css";
// import { Button, Card } from "react-bootstrap";
import styles from "./Post.module.css";

function Post() {
  return (
    <>
      <Card className={`${styles.hover} mt-5 shadow border-0 hover `}>
        <Card.Img
          className="card-img-top   order-1 order-sm-first  "
          style={{ maxHeight: `600px` }}
          variant="top"
          src="/img/clasesAJU.jpg"
          alt="clases en AJU"
        />

        <Card.Body className="border-0 order-0 order-sm-last ">
          <Card.Title className="text-center fw-bold">Post Title</Card.Title>
          <Card.Text className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            iure deserunt, sequi aspernatur vitae, iste quae eos dignissimos aut
            at, necessitatibus autem earum fugiat inventore temporibus
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer className="text-muted d-flex justify-content-between border-0  order-3 order-md-3">
          <span>
            <i className="fas fa-user-circle"></i>
          </span>
          <span>
            <i className="fas fa-calendar-alt"></i>
          </span>
        </Card.Footer> */}
      </Card>
    </>
  );
}

export default Post;

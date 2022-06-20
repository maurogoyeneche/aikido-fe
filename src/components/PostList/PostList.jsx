import React from "react";
import "./PostList.css";

import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post/Post";

function PostList({ post, posts }) {
  return (
    <>
      <Container>
        <Row className=" mb-3 p-0  m-auto">
          {/* {posts && (
          <>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
            ))}
            </>
          )} */}
          <Col xl={12} md={12} className="gap-1  ">
            <Post />
          </Col>
          <Col xl={6} md={6} className="gap-1">
            <Post />
          </Col>
          <Col xl={6} md={6} className="gap-1">
            <Post />
          </Col>
          {/* <Col xl={4} md={4} className="gap-1">
            <Post />
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default PostList;

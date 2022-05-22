import React from "react";
import "./styleNewsGrid.css";
import Post from "../Post/Post";

function NewsGrid({ post, posts }) {
  return (
    <>
      <div className="ms-auto">
        {posts && (
          <>
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </>
        )}
        <Post />
        <hr />
      </div>
    </>
  );
}

export default NewsGrid;

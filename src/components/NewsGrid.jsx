import React from "react";
import "../components/styles/styleNewsGrid.css";
import Post from "../components/Post/Post";
function NewsGrid({ post, posts }) {
  return (
    <>
      <div className="">
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

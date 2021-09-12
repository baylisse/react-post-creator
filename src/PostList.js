import React from "react";

function PostList({ posts, deletePost }) {

  const allPosts = posts.map((post, index) => {
    if (post.type === "Text") {
      return (
        <div className="post" key={index}>
          <p>{post.content}</p>
          <button name="delete" onClick={() => deletePost(index)}>
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div className="post">
          <img name="image" src={post.content} key={index} alt={index}></img>
          <button name="delete" onClick={() => deletePost(index)}>Delete</button>
        </div>
      );
    }
  });

  return <div className="post-list">{allPosts}</div>;
}

export default PostList;

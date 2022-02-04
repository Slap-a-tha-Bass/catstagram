import React, { useState, useEffect } from "react";
import { IPost } from "../../types";



const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts.rows);
        console.log({ posts });
      });
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <h1>{post.caption}</h1>
      ))}
    </div>
  );
};

export default Posts;

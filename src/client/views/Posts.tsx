import React, { useState, useEffect } from "react";
import { IPost } from "../../types";
import Card from "../components/Card";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts.rows);
      });
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <Card
          key={post.id}
          img_url={post.img_url}
          altText={post.caption}
          postid={post.id}
          caption={post.caption}
          username={post.username}
          first_name={post.first_name}
          last_name={post.last_name}
        >
          {post.caption}
        </Card>
      ))}
    </div>
  );
};

export default Posts;

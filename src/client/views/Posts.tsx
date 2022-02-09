import React, { useState, useEffect } from "react";
import { IPost } from "../../types";
import Card from "../components/Card";
import apiService from "../utils/api-service";
import { CenterDiv } from "./Login";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    apiService("/api/posts").then((posts) => {
      setPosts(posts.rows);
      setIsLoaded(true);
    });
  }, []);
  if (posts && posts.length === 0)
    return (
      <CenterDiv>
        <h1>No posts...</h1>
      </CenterDiv>
    );
  if (!isLoaded)
    return (
      <CenterDiv>
        <h1>Loading...</h1>
      </CenterDiv>
    );
  return (
    <div>
      {posts?.map((post) => (
        <Card
          isLink
          key={post.id}
          img_url={post.img_url}
          altText={post.caption}
          postid={post.id}
          caption={post.caption}
          username={post.username}
          first_name={post.first_name}
          last_name={post.last_name}
        />
      ))}
    </div>
  );
};

export default Posts;

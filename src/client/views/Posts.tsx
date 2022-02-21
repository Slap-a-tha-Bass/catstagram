import React, { useState, useEffect } from "react";
import { IPost } from "../../server/types";
import Card from "../components/Card";
import apiService from "../utils/api-service";
import { CenterDiv } from "./Login";
import styled from "styled-components";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [numOfComments, setNumOfComments] = useState<number>();

  useEffect(() => {
    apiService("/api/posts").then((posts) => {
      setPosts(posts.rows);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded && posts && posts.length === 0)
    return (
      <CenterDiv>
        <h1>No posts...</h1>
      </CenterDiv>
    );
  if (!isLoaded)
    return (
      <CenterDiv>
        <h6>Loading...</h6>
      </CenterDiv>
    );
  return (
    <div>
      {isLoaded &&
        posts?.map((post) => (
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
            num_of_comments={numOfComments}
          />
        ))}
    </div>
  );
};

export default Posts;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../server/types";
import Card from "../components/Card";
import apiService from "../utils/api-service";

const Details = () => {
  const { postid } = useParams<{ postid: string }>();
  const [post, setPost] = useState<IPost>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    apiService(`/api/posts/${postid}`).then((posts) => {
      setPost(posts.rows[0]);
      setIsLoaded(true);
    });
  }, [postid]);

  return (
    <div>
      {isLoaded && (
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
          width={90}
          height={90}
          containerWidth={100}
        />
      )}
    </div>
  );
};

export default Details;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IComments, IPost } from "../../server/types";
import Card from "../components/Card";
import apiService from "../utils/api-service";

const Details = () => {
  const { postid } = useParams<{ postid: string }>();
  const [post, setPost] = useState<IPost>(null);
  const [comments, setComments] = useState<IComments[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let postDetails = null;
    apiService(`/api/posts/${postid}`)
      .then((posts) => {
        postDetails = posts.rows[0];
        return apiService(`/api/comments/posts/${postid}`)
      })
      .then((comments) => {
        setComments(comments);
        setPost(postDetails);
        setIsLoaded(true);
        console.log({ comments, postDetails });
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

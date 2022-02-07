import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../types";
import Card from "../components/Card";

const Details = () => {
  const { postid } = useParams<{ postid: string }>();
  const [post, setPost] = useState<IPost>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/posts/${postid}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts.rows[0]);
        setIsLoaded(true);
        console.log(posts.rows);
      });
  }, []);

  return (
    <div>
      {isLoaded && <Card
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
      </Card>}
    </div>
  );
};

export default Details;

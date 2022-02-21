import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IComments, IPost } from "../../server/types";
import Card, { FlexEndDiv } from "../components/Card";
import apiService from "../utils/api-service";
import { Button, CenterDiv, Form, Label, TextArea } from "./Login";
import { IoLogoOctocat } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Details = () => {
  const { postid } = useParams<{ postid: string }>();
  const [post, setPost] = useState<IPost>(null);
  const [comments, setComments] = useState<IComments[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    let postDetails: any = null;
    apiService(`/api/posts/${postid}`)
      .then((posts) => {
        postDetails = posts.rows[0];
        return apiService(`/api/comments/posts/${postid}`);
      })
      .then((comments) => {
        setComments(comments);
        setPost(postDetails);
        setIsLoaded(true);
      });
  }, [postid]);
  const handleAddComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await apiService("/api/comments", "POST", { content, post_id: postid });
    const updatedComments = await apiService(`/api/comments/posts/${postid}`);
    setComments(updatedComments);
    setContent("");
  };
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
          comments={comments}
        />
      )}
      <CenterDiv>
        <Form>
          <Label>
            <IoLogoOctocat />
          </Label>
          <TextArea
            placeholder={"Leave a comment, meow!"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
          />
          <FlexEndDiv>
            <Button
              onClick={handleAddComment}
              marginTop={0}
              padding={0}
              bgColor="transparent"
              color="white"
              fontSize={3}
            >
              <FaCheckCircle />
            </Button>
          </FlexEndDiv>
        </Form>
      </CenterDiv>
    </div>
  );
};

export default Details;

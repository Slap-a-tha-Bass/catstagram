import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, CenterDiv } from "./Login";
import styled from "styled-components";
import apiService from "../utils/api-service";

const FlexAround = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Delete = () => {
  const navigate = useNavigate();
  const { postid } = useParams<{ postid: string }>();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (confirm(`Are you sure you want to delete this post?`)) {
      const deletePost = await apiService(
        `/api/posts/${postid}`,
        "DELETE",
        postid
      );
      if (deletePost.rowCount === 1) {
        alert("Post successfully deleted!");
        navigate("/");
      }
    }
  };
  const toProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/profile");
  };
  return (
    <>
      <CenterDiv>
        <h4>Are you sure you want to delete?</h4>
      </CenterDiv>
      <FlexAround>
        <Button onClick={handleDelete}>Yes</Button>
        <Button onClick={toProfile}>No</Button>
      </FlexAround>
    </>
  );
};

export default Delete;

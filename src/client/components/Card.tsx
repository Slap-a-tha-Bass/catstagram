import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "../views/Login";
import apiService from "../utils/api-service";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexStartDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const CardContainer = styled.div`
  width: 85vw;
  background-color: rgba(15, 15, 15, 0.4);
  border: 5px solid rgba(15, 15, 15, 0.4);
  border-radius: 10px;
  padding: 1rem;
`;
const Caption = styled.div`
  padding-top: 1.5rem;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
const SpaceOutDiv = styled.div`
  display: flex;
  place-content: space-between;
`;
const IMG = styled.img`
  width: ${(props) => props.width || 75}vw;
  height: ${(props) => props.height || 75}vw;
`;
const Card = ({
  img_url,
  altText,
  postid,
  caption,
  username,
  first_name,
  last_name,
  isLink,
}: ICard) => {
  const navigate = useNavigate();
  const handleDeletePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      confirm(
        `Are you sure you want to delete this post, ${username || first_name}?`
      )
    ) {
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
  return (
    <div>
      {isLink ? (
        <CustomLink to={`/posts/${postid}`}>
          <Container>
            <CardContainer>
              <FlexStartDiv>
                <span>@{username}</span>
              </FlexStartDiv>
              <CenterDiv>
                <div>
                  <IMG
                    src={img_url}
                    alt={altText}
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </CenterDiv>
              <Caption>{caption}</Caption>
            </CardContainer>
          </Container>
        </CustomLink>
      ) : (
        <Container>
          <CardContainer>
            <SpaceOutDiv>
              <span>@{username}</span>
              <Button
                onClick={handleDeletePost}
                bgColor={`rgba(117, 31, 255, 0.1)`}
                color={"white"}
                padding={0.25}
                fontSize={2}
              >
                <TiDeleteOutline />
              </Button>
            </SpaceOutDiv>
            <CenterDiv>
              <div>
                <IMG
                  src={img_url}
                  alt={altText}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </CenterDiv>
            <SpaceOutDiv>
              <Caption>{caption}</Caption>
              <Button
                bgColor={`rgba(117, 31, 255, 0.1)`}
                color={"white"}
                padding={0.25}
                fontSize={2}
              >
                <AiOutlineEdit />
              </Button>
            </SpaceOutDiv>
          </CardContainer>
        </Container>
      )}
    </div>
  );
};

export default Card;

interface ICard {
  img_url?: string;
  altText?: string;
  postid?: string;
  caption?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  isLink?: boolean;
}

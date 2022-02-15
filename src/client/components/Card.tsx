import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { FaEllipsisH, FaChevronRight, FaTrashAlt } from "react-icons/fa";
import { Button } from "../views/Login";
import { LI, UL } from "./Navbar";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = ({
  img_url,
  altText,
  postid,
  caption,
  username,
  isLink,
  width,
  height,
  containerWidth,
}: ICard) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {isLink ? (
        <CustomLink to={`/posts/${postid}`}>
          <Container>
            <CardContainer containerWidth={containerWidth}>
              <UserNameDiv>
                <h5>@{username}</h5>
              </UserNameDiv>
              <CenterDiv>
                <div>
                  <IMG
                    src={img_url}
                    alt={altText}
                    style={{ borderRadius: "10px" }}
                    width={width}
                    height={height}
                  />
                </div>
              </CenterDiv>
              <Caption>{caption}</Caption>
            </CardContainer>
          </Container>
        </CustomLink>
      ) : (
        <Container>
          <CardContainer containerWidth={containerWidth}>
            <UserNameDiv>
              <h5>@{username}</h5>
            </UserNameDiv>
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
            <FlexEndDiv>
              <Button
                onClick={() => setMenuOpen(!isMenuOpen)}
                bgColor="rgba(117, 31, 255, 0.01)"
                color="whitesmoke"
                fontSize={2}
                padding={0.5}
                marginTop={0}
              >
                {!isMenuOpen && <FaEllipsisH />}
                {isMenuOpen && (
                  <UL display="flex">
                    <LI>
                      <Link to={`/edit/${postid}`}>
                        <AiOutlineEdit />
                      </Link>
                    </LI>
                    <LI>
                      <Link to={`/delete/${postid}`}>
                        <FaTrashAlt />
                      </Link>
                    </LI>
                    <LI>
                      <FaChevronRight />
                    </LI>
                  </UL>
                )}
              </Button>
            </FlexEndDiv>
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
  width?: number;
  height?: number;
  containerWidth?: number;
}
interface CaptionProps {
  paddingTop?: number;
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CardContainer = styled.div<ContainerProps>`
  width: ${(props) => props.containerWidth || 95}vw;
  background-color: rgba(15, 15, 15, 0.4);
  border: 5px solid rgba(15, 15, 15, 0.4);
  border-radius: 10px;
  padding: 1rem;
`;
const Caption = styled.div<CaptionProps>`
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 1rem;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
const UserNameDiv = styled.div`
  margin-left: 10%;
  margin-bottom: 1.5rem;
`;
const IMG = styled.img`
  width: ${(props) => props.width || 75}vw;
  height: ${(props) => props.height || 75}vw;
`;
interface ContainerProps {
  containerWidth?: number;
}

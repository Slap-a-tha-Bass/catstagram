import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  width: 440px;
  border: 5px solid #9f3bfd;
  border-radius: 10px;
  padding: 1rem;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
const Card = ({
  img_url,
  altText,
  postid,
  children,
  caption,
  username,
  first_name,
  last_name,
}: ICard) => {
  return (
    <CustomLink to={`/posts/${postid}`}>
      <Container>
        <CardContainer>
          <FlexStartDiv>
            <h4>{username}</h4>
          </FlexStartDiv>
          <FlexStartDiv>
            <h6>
              {first_name} {last_name}
            </h6>
          </FlexStartDiv>
          <CenterDiv>
            <div>
              <img src={img_url} alt={altText} width={350} height={400} />
            </div>
          </CenterDiv>
          <CenterDiv>
            <div>{caption}</div>
          </CenterDiv>
        </CardContainer>
      </Container>
    </CustomLink>
  );
};

export default Card;

interface ICard {
  img_url: string;
  altText: string;
  postid: string;
  children: any;
  caption: string;
  username: string;
  first_name: string;
  last_name: string;
}

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 75%;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  display: flex;
  place-content: center;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
const Card = ({ img_url, altText, postid }) => {
  return (
    <CustomLink to={`/posts/${postid}`}>
      <CardContainer>
        <img src={img_url} alt={altText} />
      </CardContainer>
    </CustomLink>
  );
};

export default Card;

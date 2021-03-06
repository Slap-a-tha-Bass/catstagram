import React, { useState, useEffect } from "react";
import { IPost } from "../../server/types";
import Card from "../components/Card";
import apiService from "../utils/api-service";
import { CenterDiv, Form, Input } from "./Login";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Search = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    apiService("/api/posts").then((posts) => {
      setPosts(posts.rows);
      setIsLoaded(true);
    });
  }, []);
  useEffect(() => {
    if (!searchTerm.length) return;
    apiService(`/api/posts/search?searchTerm=${searchTerm}`).then((posts) => {
      setPosts(posts);
    });
  }, [searchTerm]);

  if (!isLoaded)
    return (
      <CenterDiv>
        <h6>Loading...</h6>
      </CenterDiv>
    );
  const filteredPosts = posts?.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.caption.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div>
      <CenterDiv>
        <Form>
          <SearchIcon>
            <BsSearch />
            <Input
              placeholder="search username..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              width={250}
            />
          </SearchIcon>
        </Form>
      </CenterDiv>
      {isLoaded &&
        filteredPosts &&
        filteredPosts?.map((post) => (
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
          />
        ))}
    </div>
  );
};

export default Search;

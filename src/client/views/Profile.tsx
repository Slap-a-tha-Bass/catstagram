import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import apiService from "../utils/api-service";
import { Button, CenterDiv } from "./Login";

const Profile = () => {
  const [info, setInfo] = useState<IProfileInfo>(null);
  const [userPosts, setUserPosts] = useState<IProfileInfo[]>([]);

  useEffect(() => {
    apiService("/api/users/profile").then((info) => {
      setInfo(info);
      setUserPosts(info.posts);
    });
  }, []);

  return (
    <div>
      {info && (
        <CenterDiv>
          <h3>Welcome {info.profile.username}!</h3>
        </CenterDiv>
      )}
      <CenterDiv>
        <Link to="/compose">
          <Button>new post</Button>
        </Link>
      </CenterDiv>
      {userPosts.map((post) => (
        <Card
          key={post.id}
          img_url={post.img_url}
          altText={post.caption}
          postid={post.id}
          caption={post.caption}
          username={info.profile.username}
          first_name={info.profile.first_name}
          last_name={info.profile.last_name}
        />
      ))}
    </div>
  );
};

export default Profile;

interface IProfileInfo {
  id?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  isVisible?: number;
  _created?: Date;
  user_id?: string;
  img_url?: string;
  caption?: string;
  profile?: {
    username?: string;
    first_name?: string;
    last_name?: string;
  };
}

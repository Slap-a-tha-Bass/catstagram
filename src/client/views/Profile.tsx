import React, { useEffect, useState } from "react";
import { Users } from "../../server/types";
import { IPost } from "../../types";
import apiService from "../utils/api-service";

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
      {info && <h1>Welcome {info.profile.username}!</h1>}
      {userPosts.map((post) => (
        <div key={post.id}>
          <p>{post.img_url}</p>
          <p>{post.caption}</p>
        </div>
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

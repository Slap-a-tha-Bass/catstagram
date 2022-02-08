import React, { useEffect, useState } from "react";
import { Users } from "../../server/types";
import { IPost } from "../../types";
import apiService from "../utils/api-service";

const Profile = () => {
  const [info, setInfo] = useState<IProfileInfo>(null);
  const [posts, setPosts] = useState<IProfileInfo[]>([]);

  useEffect(() => {
    apiService("/api/users/profile").then((info) => setInfo(info));
  }, []);

  return <div>{info && <h1>Welcome {info.profile.username}!</h1>}</div>;
};

export default Profile;

interface IProfileInfo {
  profile: {
    id?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    isVisible?: number;
    _created?: Date;
  };
  posts: [
    {
      id?: string;
      user_id?: string;
      img_url?: string;
      caption?: string;
      _created?: string;
    }
  ];
}

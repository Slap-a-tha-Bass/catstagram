import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { postid } = useParams<{ postid: string }>();
  return <div><h1>Deets for {postid}</h1></div>;
};

export default Details;

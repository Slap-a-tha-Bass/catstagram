import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../utils/api-service";
import { Button, CenterDiv, Form, H1, Input, Label, TextArea } from "./Login";

const Compose = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<{ img_url?: string; caption?: string }>(
    {}
  );

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!values.img_url || !values.caption) return;
    e.preventDefault();
    const post = await apiService("/api/posts", "POST", values);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <CenterDiv>
        <H1>kitty time</H1>
      </CenterDiv>
      <Form>
        <CenterDiv>
          <Label htmlFor="img_url">Image URL</Label>
        </CenterDiv>
        <CenterDiv>
          <Input
            name="img_url"
            type="text"
            value={values.img_url || ""}
            onChange={handleChanges}
          />
        </CenterDiv>
        <CenterDiv>
          <Label htmlFor="caption">caption</Label>
        </CenterDiv>
        <CenterDiv>
          <TextArea
            name="caption"
            value={values.caption || ""}
            onChange={handleChanges}
            rows={10}
          />
        </CenterDiv>
        <CenterDiv>
          <p>{values.caption?.length || 0} / 144</p>
        </CenterDiv>
        <CenterDiv>
          <Button onClick={handlePost}>Post!</Button>
        </CenterDiv>
      </Form>
    </div>
  );
};

export default Compose;

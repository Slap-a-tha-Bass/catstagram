import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../utils/api-service";
import { Button, CenterDiv, Form, H1, Input, Label, TextArea } from "./Login";

const Edit = () => {
  const { postid } = useParams<{ postid: string }>();

  const [values, setValues] = useState<{ [key: string]: string }>({});
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    apiService(`/api/posts/${postid}`).then((values) => {
      setValues(values.rows[0]);
      console.log(values.rows[0]);
    });
  }, [postid]);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Button clicked edit page");
  };
  return (
    <div>
      <CenterDiv>
        <H1>kitty edit</H1>
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
          <Button onClick={handleEdit}>Edit!</Button>
        </CenterDiv>
      </Form>
    </div>
  );
};

export default Edit;

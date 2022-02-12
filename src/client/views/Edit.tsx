import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiService from "../utils/api-service";
import { Button, CenterDiv, Form, H1, Input, Label, TextArea } from "./Login";

const Edit = () => {
  const { postid } = useParams<{ postid: string }>();
  const navigate = useNavigate();
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
  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (confirm("Are you sure you want to edit?")) {
      const data = await apiService(`/api/posts/edit/${postid}`, "PUT", values);
      if (data.editedPost.rowCount === 0) {
        alert("Did not update!");
      } else {
        navigate("/profile");
      }
    }
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

import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import PostApi from "../../API/PostApi";
import "./CreatePage.css";

const CreatePage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [avatar, setAvatar] = useState("");

  const onCreateHandle = () => {
    dispatch(PostApi.createPost_api(name, profession, avatar));
    setName("");
    setProfession("");
    setAvatar("");
  };

  return (
    <Container className="create_page_container">
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Picture</Form.Label>
          {/* <Form.Control type="file" /> */}
          <Row>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setAvatar(base64);
              }}
            />
          </Row>
        </Form.Group>
        <Button variant="primary" onClick={onCreateHandle}>
          Submit
        </Button>
      </Row>
    </Container>
  );
};

export default CreatePage;

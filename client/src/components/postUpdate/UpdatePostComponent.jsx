import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import PostApi from "../../API/PostApi";
import { globalSel } from "../../store/global";

const UpdatePostComponent = () => {
  const dispatch = useDispatch();
  const updatePost = useSelector(globalSel.updatePost);

  const [updateButtonState, setUpdateButtonState] = useState(false);

  const [name, setName] = useState(updatePost.name);
  const [profession, setProfession] = useState(updatePost.profession);
  const [avatar, setAvatar] = useState(updatePost.avatar);

  useEffect(() => {
    return () => {
      setName("");
      setProfession("");
      setAvatar("");
    };
  }, []);

  const onCreateHandle = () => {
    dispatch(
      PostApi.updatePost_api(
        updatePost._id,
        name,
        profession,
        avatar,
        setUpdateButtonState
      )
    );
  };

  return (
    <>
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
        <div
          style={{
            width: "100px",
            height: "auto",
          }}
        >
          <img src={avatar} width="100%" />
        </div>
        <Form.Label>Picture</Form.Label>
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
      <Button
        variant="primary"
        onClick={onCreateHandle}
        disabled={updateButtonState}
      >
        Submit
      </Button>
    </>
  );
};

export default UpdatePostComponent;

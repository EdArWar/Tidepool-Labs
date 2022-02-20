import moment from "moment";
import React from "react";
import { Button, Card, Col, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import avatar from "../../assets/images/avatar.png";
import { globalOp } from "../../store/global";
import { modalOp } from "../../store/modal";
import { getModalParams, MODAL_NAME } from "./../../utils/ModalParams";

const CardItem = ({ post }) => {
  const dispatch = useDispatch();

  const onUpdateClicked = () => {
    dispatch(globalOp.handleSetUpdatePost(post));
    console.log("post", post);
    dispatch(
      modalOp.handleSetModalState({
        ...getModalParams(MODAL_NAME.POST_UPDATE),
        id: post._id,
      })
    );
  };

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div
        style={{
          boxShadow:
            "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
          margin: "20px 0px",
          paddingTop: "20px",
          overflow: "hidden",
        }}
      >
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={post.avatar || avatar}
                alt=""
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
            </Card.Body>
            <ListGroupItem> {post.profession}</ListGroupItem>
            <ListGroupItem>
              CreatedAt: {moment(post.createdAt).fromNow()}
            </ListGroupItem>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button onClick={onUpdateClicked}>Update</Button>
            </Card.Body>
          </div>
        </>
      </div>
    </Col>
  );
};

export default CardItem;

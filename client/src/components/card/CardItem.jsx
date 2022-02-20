import moment from "moment";
import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
          overflow: "hidden",
          borderRadius: "30px",
        }}
      >
        <Card>
          <Link to={`posts/${post._id}`}>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${post.avatar})`,
                backgroundPosition: "center",
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "darken",
                cursor: "pointer",
              }}
            ></div>
          </Link>
          <Card.Body>
            <Card.Title>{post.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Profession: {post.profession}</ListGroupItem>
            <ListGroupItem>
              CreatedAt: {moment(post.createdAt).fromNow()}
            </ListGroupItem>
          </ListGroup>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={onUpdateClicked}>Update</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CardItem;

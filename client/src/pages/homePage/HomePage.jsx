import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PostApi from "../../API/PostApi";
import { globalSel } from "../../store/global";
import { postSel } from "../../store/post";
import CardItem from "./../../components/card/CardItem";
import Loader from "./../../components/loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const loader = useSelector(globalSel.loader);
  const postsData = useSelector(postSel.postsData);

  useEffect(() => {
    dispatch(PostApi.getAllPosts_api());
  }, []);

  return (
    <>
      {!loader ? (
        <Container
          style={{
            margin: "2% auto",
          }}
        >
          <Row>
            {postsData.length ? (
              postsData.map((item, i) => {
                return <CardItem key={i} post={item} />;
              })
            ) : (
              <h2>Post Empty</h2>
            )}
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;

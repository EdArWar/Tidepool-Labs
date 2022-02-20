import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PostApi from "../../API/PostApi";
import Search from "../../components/search/Search";
import { globalSel } from "../../store/global";
import { postSel } from "../../store/post";
import CardItem from "./../../components/card/CardItem";
import Loader from "./../../components/loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const loader = useSelector(globalSel.loader);
  const postsData = useSelector(postSel.postsData);

  const [searchParams, setSearchParams] = useSearchParams();
  let searchValue = searchParams.get("search") || "";

  const [searchState, setSearchState] = useState(searchValue);

  const onSearchChange = (e) => {
    setSearchState(e.target.value);
  };

  const onSearchClick = () => {
    searchState && setSearchParams({ search: searchState.toLowerCase() });
  };

  useEffect(() => {
    !searchValue
      ? dispatch(PostApi.getAllPosts_api())
      : dispatch(PostApi.getPostBySearch_api(searchValue));
  }, [searchValue]);

  useEffect(() => {
    !searchState && setSearchParams({});
  }, [searchState]);

  return (
    <>
      <Container
        style={{
          margin: "2% auto",
        }}
      >
        <Row>
          <Search
            value={searchState}
            onChange={onSearchChange}
            onSearchClick={onSearchClick}
          />
        </Row>
        {!loader ? (
          <Row>
            {postsData.length ? (
              postsData.map((item, i) => {
                return <CardItem key={i} post={item} />;
              })
            ) : (
              <h2>Post Empty</h2>
            )}
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};

export default HomePage;

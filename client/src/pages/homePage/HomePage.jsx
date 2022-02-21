import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PostApi from "../../API/PostApi";
import SearchComponent from "../../components/search/SearchComponent";
import { globalSel } from "../../store/global";
import { postOp, postSel } from "../../store/post";
import { searchOp, searchSel } from "../../store/search";
import CardItem from "./../../components/card/CardItem";
import Loader from "./../../components/loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const loader = useSelector(globalSel.loader);
  const postsData = useSelector(postSel.postsData);
  const promptFiled = useSelector(searchSel.promptFiled);

  const [searchState, setSearchState] = useState(searchValue);

  const onSearchChange = (e) => {
    !promptFiled && dispatch(searchOp.handleSetPromptFiledState(true));
    setSearchState(e.target.value);
  };

  const onSearchClick = () => {
    searchState && setSearchParams({ search: searchState.toLowerCase() });
  };

  useEffect(() => {
    !searchValue
      ? dispatch(PostApi.getAllPosts_api())
      : dispatch(PostApi.getPostBySearch_api(searchValue));
    !searchValue && setSearchState("");
  }, [searchValue]);

  useEffect(() => {
    !searchState && setSearchParams({});
  }, [searchState]);

  useEffect(() => {
    dispatch(PostApi.getAllPostsNames_api());

    return () => {
      setSearchState("");
      dispatch(postOp.handleSetAllPost([]));
    };
  }, []);

  const onSearchPrompt = (item) => {
    dispatch(searchOp.handleSetPromptFiledState(false));
    setSearchState(item);
    setSearchParams({ search: item.toLowerCase() });
  };

  return (
    <>
      <Container
        style={{
          margin: "2% auto",
        }}
      >
        <SearchComponent
          value={searchState}
          onChange={onSearchChange}
          onSearchClick={onSearchClick}
          onSearchPrompt={onSearchPrompt}
          promptFiled={promptFiled}
        />
        {!loader ? (
          <Row>
            {postsData.length > 0 ? (
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

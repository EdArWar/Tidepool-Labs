import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { messageOp, messageSel } from "../store/message";
import Layout from "./../layout/Layout";
import NotFoundPage from "./../pages/404/NotFoundPage";
import HomePage from "./../pages/homePage/HomePage";
import SearchPage from "./../pages/searchPage/SearchPage";
import SearchWordsPage from "./../pages/searchWordsPage/SearchWordsPage";
import { Response_Type } from "./../variable/ResponseType";

const PageRoutes = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const responseType = useSelector(messageSel.responseType);
  const message = useSelector(messageSel.message);

  useEffect(() => {
    if (responseType) {
      if (responseType === Response_Type.SUCCESS) {
        alert.success(message);
      } else if (responseType === Response_Type.INFO) {
        alert.show(message);
      } else if (responseType === Response_Type.ERROR) {
        alert.error(message);
      }

      setTimeout(() => {
        dispatch(messageOp.handleSetMessageState(null));
        dispatch(messageOp.handleResponseTypeState(null));
      }, 5000);
    }
  }, [responseType]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        {/* <Route path="create" element={<CreatePage />} /> */}
        <Route path="search-words" element={<SearchWordsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;

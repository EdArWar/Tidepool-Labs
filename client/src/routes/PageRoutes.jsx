import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "../pages/createPage/CreatePage";
import Layout from "./../layout/Layout";
import NotFoundPage from "./../pages/404/NotFoundPage";
import HomePage from "./../pages/homePage/HomePage";
import SearchWordsPage from "./../pages/searchWordsPage/SearchWordsPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:search" element={<HomePage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="search-words" element={<SearchWordsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;

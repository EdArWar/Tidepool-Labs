import React from "react";
import { Row } from "react-bootstrap";
import Search from "./Search";
import SearchPrompt from "./searchPrompt/SearchPrompt";

const SearchComponent = ({ value, onChange, onSearchClick }) => {
  return (
    <Row style={{ position: "relative" }}>
      <Search value={value} onChange={onChange} onSearchClick={onSearchClick} />
      <SearchPrompt value={value} />
    </Row>
  );
};

export default SearchComponent;

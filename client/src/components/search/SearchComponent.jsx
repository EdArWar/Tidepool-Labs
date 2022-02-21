import React from "react";
import { Row } from "react-bootstrap";
import Search from "./Search";
import SearchPrompt from "./searchPrompt/SearchPrompt";

const SearchComponent = ({
  value,
  onChange,
  onSearchClick,
  onSearchPrompt,
  promptFiled,
}) => {
  return (
    <Row style={{ position: "relative" }}>
      <Search value={value} onChange={onChange} onSearchClick={onSearchClick} />
      {promptFiled && (
        <SearchPrompt value={value} onSearchPrompt={onSearchPrompt} />
      )}
    </Row>
  );
};

export default SearchComponent;

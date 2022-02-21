import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = ({ data }) => {
  const sortData = [...data].sort((a, b) => {
    return b.count - a.count;
  });

  return (
    <>
      {sortData.map((item, i) => {
        return (
          <SearchListItem
            key={item._id}
            index={i + 1}
            word={item.word}
            count={item.count}
          />
        );
      })}
    </>
  );
};
export default SearchList;

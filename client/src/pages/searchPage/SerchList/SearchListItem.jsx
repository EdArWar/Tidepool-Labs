import React from "react";

const SearchListItem = ({ index, word, count }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{word}</td>
      <td>{count}</td>
    </tr>
  );
};

export default SearchListItem;

import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchApi from "../../API/SearchApi";
import { searchSel } from "../../store/search";
import SearchList from "./SerchList/SearchList";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(searchSel.searchData);

  useEffect(() => {
    dispatch(SearchApi.getSearchWords_api());
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Word</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <SearchList data={searchData} />
      </tbody>
    </Table>
  );
};

export default SearchPage;

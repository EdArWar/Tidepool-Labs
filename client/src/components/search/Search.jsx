import cn from "classnames";
import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Search.module.css";

const Search = ({
  value,
  onChange,
  children = "Search",
  placeholder = "Search...",
  onSearchClick,
}) => {
  const inputClass = cn({
    [classes.input]: true,
    [classes.filled]: value?.length,
  });

  return (
    <div className={classes.container}>
      <label>
        {children}
        <input
          className={inputClass}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
      <Button variant="success" onClick={onSearchClick} disabled={!value}>
        <AiOutlineSearch />
      </Button>
    </div>
  );
};

export default Search;

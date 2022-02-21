import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { postSel } from "../../../store/post";
import styles from "./SearchPrompt.module.css";

const SearchPrompt = ({ value, onSearchPrompt }) => {
  const postNamesData = useSelector(postSel.postsNames);

  let searchWords = useMemo(() => {
    return postNamesData.reduce((prev, cur) => {
      const currentName = cur.split(" ")[0];
      if (
        currentName?.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
        currentName?.toLowerCase().indexOf(value.toLowerCase()) === 0 &&
        !prev.includes(currentName)
      ) {
        prev.push(currentName);
      }
      return prev;
    }, []);
  }, [value]);

  if (!value || searchWords.length === 0) return null;

  const onSelectItem = (item) => {
    onSearchPrompt(item);
  };

  return (
    <div className={styles.search_prompt_container}>
      <ul>
        {searchWords.map(
          (item, i) =>
            i < 10 && (
              <li key={item + i} onClick={() => onSelectItem(item)}>
                {item}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default SearchPrompt;

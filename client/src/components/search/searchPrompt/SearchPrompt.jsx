import React, { memo } from "react";
import { useSelector } from "react-redux";
import { postSel } from "../../../store/post";
import styles from "./SearchPrompt.module.css";

const SearchPrompt = ({ value }) => {
  const postData = useSelector(postSel.postsData);

  if (!value) return null;

  const searchWords = postData.reduce((prev, cur) => {
    const currentName = cur.name?.split(" ")[0];
    if (
      currentName?.toLowerCase().indexOf(value) !== -1 &&
      currentName?.toLowerCase().indexOf(value) === 0 &&
      !prev.includes(currentName)
    ) {
      prev.push(currentName);
    }
    return prev;
  }, []);

  const onSelectItem = () => {
    //
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

export default memo(SearchPrompt);

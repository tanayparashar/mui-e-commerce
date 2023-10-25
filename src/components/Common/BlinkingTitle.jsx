// BlinkingTitle.js
import React, { useEffect } from "react";

const BlinkingTitle = ({ title, interval = 1000 }) => {
  useEffect(() => {
    let id;
    let previousTitle = document.title;

    const changeTitle = () => {
      if (document.title !== title) {
        previousTitle = document.title;
        document.title = title;
      } else {
        document.title = previousTitle;
      }
      id = window.setTimeout(changeTitle, interval);
    };

    changeTitle();

    return () => {
      if (document.title === title) {
        document.title = previousTitle;
      }
      if (id) {
        window.clearTimeout(id);
      }
    };
  }, [title, interval]);

  return null;
};

export default BlinkingTitle;

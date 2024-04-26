import { useEffect } from "react";

const useFlashTitle = (title, interval = 5000) => {
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

export default useFlashTitle;

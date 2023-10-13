import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Imagenius`;
  }, [title]);
};
export default useTitle;

import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 'media' object represents the evaluated result of the media query against the current viewport
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener)

  }, [matches, query])

  return matches;
};

export default useMediaQuery;
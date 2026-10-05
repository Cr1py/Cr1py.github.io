import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // handles section links
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // start the homepage at the very bottom
    if (pathname === "/") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "instant",
      });

      return;
    }

    // normal page navigation
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
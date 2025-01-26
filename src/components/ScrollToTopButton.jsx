"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          variant="outline"
          size="icon"
          className="sticky group w-10 h-10 bottom-6 border bg-background rounded-full shadow-md shadow-blue-400 dark:shadow-green-600 transition duration-300 ease-in-out ml-[87%] xs:ml-[90%] sm:ml-[93%]"
          onClick={goToTop}
        >
          <FaArrowUp className="group-hover:text-blue-600 text-gray-500 dark:group-hover:text-green-600" />
        </Button>
      )}
    </>
  );
};

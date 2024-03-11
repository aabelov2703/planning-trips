"use client";
import { useEffect, useState } from "react";
import Button from "@/components/common/button";
import Chevron from "../svg/chevron";

const TopBtn: React.FC = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(window.scrollY > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);
    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      variant="contained"
      className={`fixed bottom-10 right-10 ${
        show ? "block" : "hidden"
      } shadow-shadow-1`}
      style={{ padding: "0px 4px 4px 4px" }}
    >
      <Chevron direction="up" size="40" />
    </Button>
  );
};

export default TopBtn;

"use client";
import { useAppContext } from "@/hooks/use-app-context";
import { useState } from "react";
import { calcBtn } from "@/utils/calcStyles";
import { ClickableProps } from "@/types/props";

const Button: React.FC<ClickableProps> = ({ onClick, children, ...props }) => {
  const { theme } = useAppContext();
  const [isHover, setIsHover] = useState<boolean>(false);

  const btnStyles = calcBtn(theme, { ...props, isHover });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHover(false);
    onClick && onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`m-1 rounded-full ${props?.className || ""}`}
      style={{
        ...btnStyles,
        ...(props?.style && props.style),
      }}
      disabled={props?.disabled}
    >
      {children}
    </button>
  );
};

export default Button;

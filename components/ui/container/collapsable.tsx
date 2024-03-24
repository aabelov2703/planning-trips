"use client";
import { useState } from "react";
import { BaseProps } from "@/types/props";
import Chevron from "@/components/ui/svg/chevron";
import { useAppContext } from "@/hooks/use-app-context";
import { themeCommonStyles } from "@/utils/calcStyles";
import Button from "@/components/common/button";

const Collapsable: React.FC<BaseProps> = ({ children, className, ...rest }) => {
  const { theme } = useAppContext();
  const [hide, setHide] = useState(true);

  return (
    <div
      className="w-full rounded px-4 py-2 min-w-[220px] shadow-shadow-2"
      style={themeCommonStyles(theme)}
      {...rest}
    >
      <Button
        className="absolute right-4 top-3"
        style={{
          padding: 0,
          width: 22,
          height: 22,
        }}
        onClick={() => setHide((prev) => !prev)}
      >
        <Chevron
          direction={hide ? "down" : "up"}
          size={18}
          className={`hover:cursor-pointer `}
        />
      </Button>
      {hide ? "Hide" : "Show"} details
      {hide ? children : null}
    </div>
  );
};

export default Collapsable;

"use client";
import { useState } from "react";
import Container from "@/components/common/container";
import { BaseProps } from "@/types/props";
import Chevron from "@/components/ui/svg/chevron";
import { useAppContext } from "@/hooks/use-app-context";
import { themeCommonStyles } from "@/utils/calcStyles";

const Collapsable: React.FC<BaseProps> = ({ children, className, ...rest }) => {
  const { theme } = useAppContext();
  const [hide, setHide] = useState(true);

  return (
    <div className="w-full rounded" style={themeCommonStyles(theme)} {...rest}>
      <div
        className="flex justify-between py-2 px-4 sm:px-6"
        onClick={() => setHide((prev) => !prev)}
      >
        {hide ? "Hide" : "Show"} details
        <Chevron
          direction={hide ? "down" : "up"}
          size={18}
          className="hover:cursor-pointer"
        />
      </div>
      {hide ? <Container className="flex-col">{children}</Container> : null}
    </div>
  );
};

export default Collapsable;

import { useAppContext } from "@/hooks/use-app-context";
import { useRef, useState } from "react";
import BurgerSvg from "../svg/burger";
import Dropdown from "@/components/common/dropdown";
import useOutsideClick from "@/hooks/use-outside-click";
import { ClickableProps } from "@/types/props";

const BurgerBtn: React.FC<ClickableProps> = ({ onClick, children }) => {
  const { theme } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setToggle(false));

  const handleClick = () => {
    setToggle((prev) => !prev);
    onClick && onClick();
  };

  return (
    <div ref={ref} onClick={handleClick}>
      {toggle ? (
        <Dropdown header="Navigation">{children}</Dropdown>
      ) : (
        <BurgerSvg color={theme === "dark" ? "var(--light)" : "var(--dark)"} />
      )}
    </div>
  );
};

export default BurgerBtn;

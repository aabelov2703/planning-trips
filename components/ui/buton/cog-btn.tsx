import { useAppContext } from "@/hooks/use-app-context";
import { useRef, useState } from "react";
import Dropdown from "@/components/common/dropdown";
import Switch from "@/components/common/switch";
import Cog from "../svg/cog";
import useOutsideClick from "@/hooks/use-outside-click";

const CogBtn: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { theme } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setToggle(false));

  const strHint = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  const handleClick = () => {
    setToggle((prev) => !prev);
    onClick && onClick();
  };

  return (
    <div
      ref={ref}
      style={
        theme === "light"
          ? { backgroundColor: "var(--light)", color: "var(--dark)" }
          : { backgroundColor: "var(--dark)", color: "var(--light)" }
      }
    >
      {toggle ? (
        <Dropdown onClick={handleClick} header="Settings">
          <Switch hint={strHint}>{strHint}</Switch>
        </Dropdown>
      ) : (
        <div onClick={handleClick}>
          <Cog />
        </div>
      )}
    </div>
  );
};

export default CogBtn;

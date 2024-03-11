import { useAppContext } from "@/hooks/use-app-context";
import { ClickableProps } from "@/types/props";

const Dropdown: React.FC<ClickableProps> = ({
  onClick,
  className,
  children,
  ...props
}) => {
  const { theme } = useAppContext();

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`fixed top-0 flex flex-col gap-2 justify-end inset-x-0 m-2 px-6 py-2 highlighted ${theme} ${className}`}
      onClick={handleClick}
    >
      {props.header && <p>{props.header}</p>}
      {children}
    </div>
  );
};

export default Dropdown;

import { useAppContext } from "@/hooks/use-app-context";
import { ChangableProps } from "@/types/props";
import { calcBtn } from "@/utils/calcStyles";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ChangableProps>(
  ({ id, onChange, label, style, ...rest }, ref) => {
    const { theme } = useAppContext();

    const size = "my-1 ml-2 mr-1 px-2 w-[calc(100%-40px)]";
    const border = "border rounded-lg border-dotted";
    const focus =
      "focus:outline-none focus:border-dotted focus:border-blue-400 focus:border-1";

    const btnStyles = calcBtn(theme, { ...rest });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
    };

    return (
      <div
        className={`text-nowrap flex items-center ${
          rest?.type === "checkbox" ? "flex-row-reverse" : ""
        }${rest?.hide ? "hidden" : ""}`}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <input
          ref={ref}
          id={id}
          className={`text-current ${size} ${border} ${focus} min-w[20px]`}
          onChange={handleChange}
          style={{ ...btnStyles, ...style }}
          autoComplete="off"
          title={rest?.hint && rest?.value}
          {...rest}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;

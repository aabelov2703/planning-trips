"use client";
import { useAppContext } from "@/hooks/use-app-context";
import { searchStyles } from "@/utils/calcStyles";
import { useState } from "react";

const Select: React.FC<any> = ({ options, className, onSelect, ...rest }) => {
  const { theme } = useAppContext();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select
      className={`w-full focus:outline-none ${className}`}
      value={selectedOption}
      onChange={handleSelectChange}
      style={{ ...searchStyles(theme), ...rest?.style }}
      {...rest}
    >
      <option value="" disabled hidden style={{ ...rest?.style }}>
        {rest?.placeholder || "Select an option"}
      </option>
      {options?.map((item: any) => (
        <option key={item.label} value={item.value} label={item.label}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Select;

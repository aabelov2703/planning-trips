"use client";
import { ChangeEvent, useRef, useState } from "react";
import Checkbox from "./checkbox";
import { useAppContext } from "@/hooks/use-app-context";
import { searchStyles } from "@/utils/calcStyles";
import useOutsideClick from "@/hooks/use-outside-click";
import { normalizeStr } from "@/utils/utils";

const SelectMulti = ({ onSelect, options, ...rest }: any) => {
  const { theme } = useAppContext();
  const [toggled, setTgoggled] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(toggleRef, () => setTgoggled(false));

  const selectClicked = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setTgoggled((prev) => !prev);
  };

  const checkboxChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    onSelect && onSelect({ id: rest.name, value: id, checked });
    setTgoggled(false);
  };

  return (
    <div
      className={`w-full relative z-1 focus:outline-none ${rest?.className} ${theme}`}
      style={{ ...searchStyles(theme), ...rest?.style }}
    >
      <select
        className={`w-full focus:outline-none p-1`}
        onChange={() => {}}
        onMouseDown={selectClicked}
        value={"test"}
        style={searchStyles(theme)}
      >
        {
          <option value="hidden" hidden>
            {options
              ?.filter((option: any) => option.checked)
              .map((option: any) => option.label)
              .join(", ") || rest?.placeholder}
          </option>
        }
      </select>
      {toggled ? (
        <div
          className="w-full absolute translate-y-[-4px] p-2 z-10 bg-slate-50 flex flex-wrap border-dotted border-[1px] border-blue-600"
          ref={toggleRef}
          style={searchStyles(theme)}
        >
          {options?.map((item: any) => (
            <Checkbox
              id={item.value}
              key={item.value}
              type="checkbox"
              label={normalizeStr(item.value)}
              onChange={checkboxChanged}
              checked={item?.checked}
              style={{
                minWidth: 20,
                marginLeft: 0,
                padding: "2px 0",
                ...searchStyles(theme),
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SelectMulti;

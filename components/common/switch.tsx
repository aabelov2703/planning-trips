import { useAppContext } from "@/hooks/use-app-context";
import { Props } from "@/types/props";
import { calcSwitch } from "@/utils/calcStyles";

const Switch: React.FC<Props> = ({ hint, children }) => {
  const { theme, setTheme } = useAppContext();
  const styles = calcSwitch(theme);

  return (
    <div className="flex whitespace-nowrap items-center" title={hint || ""}>
      <div
        className={`${theme} cursor-pointer relative inline-block w-10 h-6 rounded-full bg-white duration-300 border border-blue-200 border-solid dark:bg-slate-800`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={styles.outter}
      >
        <div
          className={`${theme} absolute left-[2px] top-[1px] w-[20px] h-[20px] rounded-full transition-transform duration-300 ${
            theme === "light" ? "translate-x-[14px]" : ""
          }`}
          style={styles.inner}
        ></div>
      </div>
      <span className="ml-2 text-sm">{children}</span>
    </div>
  );
};

export default Switch;

import Button from "@/components/common/button";
import { useAppContext } from "@/hooks/use-app-context";
import { themeCommonStyles } from "@/utils/calcStyles";
import PlusSvg from "../svg/plus";

const Modal: React.FC<any> = ({ children, close, callback, ...rest }) => {
  const { theme } = useAppContext();

  const onClick = () => {
    callback();
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000003]">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className={`fixed p-4 rounded-xl max-w-[1024px] min-w-[214px] w-[80%] h-[50%] shadow-shadow-2 ${theme}`}
        style={themeCommonStyles(theme)}
      >
        <div className="absolute right-3 top-3">
          <Button
            className="rotate-45"
            style={{
              padding: 0,
              width: 24,
              height: 24,
            }}
            onClick={close}
          >
            <PlusSvg />
          </Button>
        </div>
        {children}
        <Button onClick={onClick}>Apply</Button>
      </div>
    </div>
  );
};

export default Modal;

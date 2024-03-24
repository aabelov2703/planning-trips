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
        className="fixed p-4 rounded-xl max-w-[1024px] min-w-[214px] w-[80%] h-[50%] shadow-shadow-2"
        style={themeCommonStyles(theme)}
      >
        <div className="flex items-center">
          <div className="flex flex-1 justify-center font-semibold uppercase">
            {rest?.title}
          </div>
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
        <div className="flex flex-col h-[calc(100%-64px)] overflow-y-auto overflow-hidden inset-1">
          {children}
        </div>
        <div className="flex justify-center">
          <Button onClick={onClick} className="border-1">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

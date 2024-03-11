import { BaseProps } from "@/types/props";

const Container: React.FC<BaseProps> = ({ children, className, style }) => {
  return (
    <div
      className={`w-full flex justify-center p-4 sm:p-6 flex-1 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;

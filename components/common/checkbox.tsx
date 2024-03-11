import { ChangableProps } from "@/types/props";
import Input from "./input";

const Checkbox: React.FC<ChangableProps> = ({ id, onChange, ...rest }) => {
  return <Input id={id} type="checkbox" onChange={onChange} {...rest} />;
};

export default Checkbox;

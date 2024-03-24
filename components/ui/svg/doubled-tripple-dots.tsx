import { Props } from "@/types/props";

const DoubledTrippleDots: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`w-${props?.w || 6} h-${props?.h || 6} opacity-50`}
    >
      <circle cx="9" cy="6.25" r="0.7" />
      <circle cx="9" cy="12.25" r="0.7" />
      <circle cx="9" cy="18.25" r="0.7" />
      <circle cx="15" cy="6.25" r="0.7" />
      <circle cx="15" cy="12.25" r="0.7" />
      <circle cx="15" cy="18.25" r="0.7" />
    </svg>
  );
};

export default DoubledTrippleDots;

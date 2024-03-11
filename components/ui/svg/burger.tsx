const BurgerSvg: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "black",
}) => {
  return (
    <svg
      className={`w-6 h-6 ${className} cursor-pointer`}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

export default BurgerSvg;

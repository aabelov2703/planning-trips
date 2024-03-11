const Chevron = ({ direction, size = 24, ...rest }: any) => {
  let path = null;

  if (direction === "up") path = <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />;
  if (direction === "down") path = <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      {...rest}
    >
      {path}
    </svg>
  );
};

export default Chevron;

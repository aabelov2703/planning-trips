import Collapsable from "@/components/ui/container/collapsable";

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      Home
      <div
        className={`absolute w-full max-w-[200px] p-2 bottom-2 left-2 z-[1000002] bg-opacity-100 text-sm dark`}
      >
        <Collapsable className="fixed bottom-4 max-w-[320px] w-1/2">
          {[].map((userPlace: any, index: number) => {
            return (
              <li
                key={index}
                className="list-none hover:cursor-pointer text-nowrap"
              >
                {`${index + 1} ${userPlace?.name}`}
              </li>
            );
          })}
        </Collapsable>
      </div>
    </div>
  );
};

export default Home;

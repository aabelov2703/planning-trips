import { useAppContext } from "@/hooks/use-app-context";
import Collapsable from "../container/collapsable";
import Button from "@/components/common/button";
import React from "react";
import { computeRoutes } from "@/app/api/google/route";

const MapUserPlacesList: React.FC<any> = () => {
  const { userPlaces, setCurrent } = useAppContext();

  const clickPlace = (p: any) => {
    setCurrent(p.location);

    if (userPlaces.length > 1) {
      let intermediates = {};
      if (userPlaces.length > 2)
        intermediates = {
          intermediates: userPlaces
            ?.slice(1, userPlaces.length - 1)
            ?.map((p: any) => ({ placeId: p?.location?.id })),
        };
      const route = {
        origin: { placeId: userPlaces[0]?.location?.id },
        destination: {
          placeId: userPlaces[userPlaces.length - 1]?.location?.id,
        },
        ...intermediates,
      };

      console.log("route", route);
      //// calculate optimized route
      //computeRoutes(route)
      //  .then((res) => console.log("res", res))
      //  .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {userPlaces.filter((p) => p.saved).length > 0 ? (
        <div
          className={`absolute  p-2 bottom-2 left-2 z-[1000002] bg-opacity-100 text-sm max-h-[180px] overflow-y-auto`}
        >
          <Collapsable className="fixed bottom-4 max-w-[320px] w-1/2">
            {userPlaces
              .filter((p) => p.saved)
              .map((p: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="list-none text-nowrap hover:cursor-pointer"
                    onClick={() => clickPlace(p)}
                  >
                    {index + 1}
                    {". "}
                    <span>{p.location?.name}</span>
                    <Button label="X" />
                  </li>
                );
              })}
          </Collapsable>
        </div>
      ) : null}
    </>
  );
};

export default MapUserPlacesList;

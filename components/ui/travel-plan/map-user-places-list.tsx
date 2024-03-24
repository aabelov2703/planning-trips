import { useAppContext } from "@/hooks/use-app-context";
import Collapsable from "../container/collapsable";
import Button from "@/components/common/button";
import React, { useState } from "react";
import { computeRoutes } from "@/app/api/google/route";
import Modal from "../container/modal";
import Draggable from "@/components/common/draggable";
import EditSvg from "../svg/edit";

const MapUserPlacesList: React.FC<any> = () => {
  const { userPlaces, setCurrent, setRoute } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const clickPlace = (p: any) => {
    setCurrent(p.location);
  };

  const calculateRoute = () => {
    if (userPlaces.length > 1) {
      let intermediates: { vehicleStopover: boolean; placeId: string }[] = [];
      if (userPlaces.length > 2)
        intermediates = userPlaces
          ?.slice(1, userPlaces.length - 1)
          ?.map((p: any) => ({
            vehicleStopover: true,
            placeId: p?.location?.id,
          }));

      const extraInterimediates = userPlaces
        .map((p) =>
          p?.points
            .filter((f: any) => f.selected)
            .map((m: any) => ({ vehicleStopover: true, placeId: m.id }))
        )
        .flatMap((p) => p);

      const route = {
        origin: { placeId: userPlaces[0]?.location?.id },
        destination: {
          placeId: userPlaces[userPlaces.length - 1]?.location?.id,
        },
        intermediates: [...intermediates, ...extraInterimediates],
      };

      // calculate optimized route
      computeRoutes(route)
        .then((res) => setRoute(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {userPlaces.filter((p) => p.saved).length > 0 ? (
        <div className="absolute bottom-2 left-2 z-[1000002] bg-opacity-100 text-sm max-h-[180px] shadow-shadow-2">
          <Collapsable className="fixed bottom-4 max-w-[320px] w-1/2">
            <>
              {userPlaces
                .filter((p) => p.saved)
                .map((p: any, index: number) => {
                  return (
                    <li
                      key={index}
                      className="flex list-none text-nowrap hover:cursor-pointer justify-between pt-1"
                      onClick={() => clickPlace(p)}
                    >
                      <p>
                        {index + 1}
                        {". "}
                        <span>{p.location?.name}</span>
                      </p>
                      <Button
                        style={{
                          margin: 0,
                          marginLeft: 8,
                          paddingLeft: 4,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <EditSvg w={4} h={4} />
                      </Button>
                    </li>
                  );
                })}
              <Button
                onClick={() => setShowModal(true)}
                disabled={userPlaces.filter((p) => p.saved).length <= 1}
              >
                Calc route
              </Button>
            </>
          </Collapsable>
        </div>
      ) : null}
      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          callback={calculateRoute}
          title="Define edge points"
        >
          <ModalData userPlaces={userPlaces} />
        </Modal>
      )}
    </>
  );
};

const ModalData: React.FC<any> = ({ userPlaces }) => {
  return (
    <Draggable>
      {userPlaces
        .filter((location: any) => location.saved)
        .map((location: any) => (
          <div key={location.location.id} className="ml-4 font-semibold">
            {location.location.name}
            {location?.points
              ?.filter((p: any) => p.selected)
              .map((p: any) => (
                <div key={p.id} className="font-light text-sm">
                  {p.displayName.text}
                </div>
              ))}
          </div>
        ))}
    </Draggable>
  );
};

export default MapUserPlacesList;

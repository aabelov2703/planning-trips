"use client";
import { useAppContext } from "@/hooks/use-app-context";
import { useEffect } from "react";
import Map from "@/components/ui/travel-plan/map";
import { ClickableProps } from "@/types/props";
import { getIP } from "../../api/ip-geolocation";

const Travel: React.FC<ClickableProps> = () => {
  const { setCurrent } = useAppContext();

  useEffect(() => {
    getIP().then((res) => {
      if (res?.latitude && res?.longitude)
        setCurrent({
          geo: { lat: +res.latitude, lng: +res.longitude },
          name: "Current Location",
        });
    });
  }, [setCurrent]);

  return (
    <div className="w-full flex flex-col">
      <h2>Plan your own trip</h2>
      <section className="w-full h-[100%] flex flex-1">
        <Map />
      </section>
    </div>
  );
};

export default Travel;

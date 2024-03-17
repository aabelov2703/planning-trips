"use client";
import { useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MapProps } from "@/types/props";
import { libraries, mapOptions } from "@/context/google";
import MapPlaces from "./map-places";
import { useAppContext } from "@/hooks/use-app-context";
import MapMarkers from "./map-markers";
import MapUserPlacesList from "./map-user-places-list";

const Map: React.FC<MapProps> = () => {
  const { current, userPlaces } = useAppContext();
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    mapIds: ["20ecaf106acc42b1"],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
    libraries,
  });

  const onLoadMap = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  console.log("userPlaces", userPlaces);

  return (
    <div className="flex flex-1 flex-col w-full relative ">
      {isLoaded ? (
        <>
          <div className="w-full max-w-[200px] p-2 absolute z-[1000002] top-30 left-2">
            <MapPlaces isLoaded={isLoaded} mapRef={mapRef} />
          </div>

          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            zoom={11}
            center={current?.geo}
            options={mapOptions}
            onLoad={onLoadMap}
          >
            <MapMarkers />
          </GoogleMap>
        </>
      ) : (
        <>Loading...</>
      )}

      <MapUserPlacesList />
    </div>
  );
};

export default Map;

/*
currentLocation - 1. initial position; 2. autocompleted search snd selected location
points - points around current location. If point is selected then selected flag is set to true, deselected - to false
saved - true if location was saved by user as interested
*/

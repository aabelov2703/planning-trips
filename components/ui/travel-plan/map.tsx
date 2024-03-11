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
  const { current, /*points,*/ userPlaces } = useAppContext();
  const mapRef = useRef<google.maps.Map | null>(null);
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(
    null
  );
  const autocompleteRef = useRef<google.maps.places.AutocompleteService | null>(
    null
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    mapIds: ["20ecaf106acc42b1"],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
    libraries,
  });

  const onLoadMap = (map: google.maps.Map) => {
    mapRef.current = map;
    placesServiceRef.current = new google.maps.places.PlacesService(map);
    autocompleteRef.current = new google.maps.places.AutocompleteService();
  };

  console.log("userPlaces", userPlaces);
  console.log("current", current);

  return (
    <div className="flex flex-1 flex-col w-full relative ">
      {isLoaded ? (
        <>
          <div className="w-full max-w-[200px] p-2 absolute z-[1000002] top-30 left-2">
            <MapPlaces
              isLoaded={isLoaded}
              mapRef={mapRef}
              autocompleteRef={autocompleteRef}
              placesServiceRef={placesServiceRef}
            />
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
points - points around current location 
selected - selected and saved points
saved - true if location was saved by user as interested
*/

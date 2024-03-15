"use client";
import { useAppContext } from "@/hooks/use-app-context";
import { useState } from "react";
import MapAutocomplete from "./map-autocomplete";
import { nearbySearch } from "@/app/api/google/route";
import { placeTypes } from "@/context/google";
import SelectMulti from "@/components/common/select-multi";
import { normalizeStr } from "@/utils/utils";
import { MAP_RADIUS } from "@/utils/const";
import Button from "@/components/common/button";

const MapPlaces: React.FC<any> = ({ isLoaded, mapRef }) => {
  const { current, setPoints, userPlaces, setUserPlaces } = useAppContext();
  const [showSelectTypes, setShowSelectTypes] = useState(false);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);

  const getPlaces = async () => {
    if (!isLoaded || !current || selectedPlaceTypes.length === 0) return;
    const center = {
      latitude: current.geo?.lat,
      longitude: current.geo?.lng,
    };
    const request = {
      includedTypes: [selectedPlaceTypes],
      locationRestriction: {
        circle: {
          center,
          radius: MAP_RADIUS,
        },
      },
    };
    nearbySearch(request)
      .then((res) => {
        const bounds = new google.maps.LatLngBounds();
        setPoints(res.places);
        res.places?.forEach((place: any) => {
          if (place?.location) {
            bounds.extend({
              lat: place.location.latitude,
              lng: place.location.longitude,
            });
          }
        });
        // do not lose the user-selected current location of the place
        if (current?.geo?.lat)
          bounds.extend({
            lat: current?.geo?.lat,
            lng: current?.geo?.lng,
          });
        const center = bounds.getCenter();
        const zoom = mapRef.current?.fitBounds(bounds);
        if (center && zoom) {
          mapRef.current?.setCenter(center);
          mapRef.current?.setZoom(zoom);
        }
        const newUserPlaces = [
          ...userPlaces.filter((p) => p.location?.id !== current?.id),
          { location: current, points: res.places },
        ];
        setUserPlaces(newUserPlaces);
      })
      .catch((err) => console.log(err));
  };

  const selectMultiChanged = (res: any) => {
    const newState = res.checked
      ? [...selectedPlaceTypes, res.value]
      : selectedPlaceTypes.filter((checkedValue) => checkedValue !== res.value);
    setSelectedPlaceTypes(newState);
  };

  const clickSavePlaces = () => {
    const newUserPlaces = userPlaces.map((place) =>
      place.location.id === current.id ? { ...place, saved: true } : place
    );
    setUserPlaces(newUserPlaces);
  };

  return (
    <>
      <MapAutocomplete
        isLoaded={isLoaded}
        setShowSelectTypes={setShowSelectTypes}
      />
      {showSelectTypes
        ? placeTypes.map((entry: any) => {
            const data = Object.entries(entry)[0];
            return (
              <SelectMulti
                key={data[0]}
                options={(data[1] as [])?.map((item) => ({
                  label: normalizeStr(item),
                  value: item,
                  checked: selectedPlaceTypes.some(
                    (checkedValue) => checkedValue === item
                  ),
                }))}
                onSelect={selectMultiChanged}
                placeholder={data[0]}
                name={data[0]}
              />
            );
          })
        : null}
      {showSelectTypes && (
        <div className="flex text-nowrap justify-between">
          <Button
            onClick={getPlaces}
            disabled={selectedPlaceTypes.length === 0}
            style={{ borderRadius: 4, margin: "4px 0", fontSize: 14 }}
          >
            Get points
          </Button>
          <Button
            onClick={clickSavePlaces}
            style={{ borderRadius: 4, margin: "4px 0", fontSize: 14 }}
          >
            Save place
          </Button>
        </div>
      )}
    </>
  );
};

export default MapPlaces;

import { useAppContext } from "@/hooks/use-app-context";
import { geocodeLatLng } from "@/app/api/google-geocode/route";
import { placeDetails } from "@/app/api/google-places/route";
import { MarkerF } from "@react-google-maps/api";
import MapMarkerInfo from "./map-marker-info";
import { useState } from "react";
import { Place } from "@/types/types";

const MapMarkers: React.FC<any> = () => {
  const { userPlaces } = useAppContext();

  return (
    <>
      {userPlaces.map((place, ind) => {
        const { location, points, selected } = place;
        return (
          <div key={ind}>
            <GetMarkers
              data={[location].map((p: any) => ({
                ...p,
                type: "primary",
              }))}
              size={32}
            />
            <GetMarkers
              data={points
                ?.filter(
                  (p: any) => !selected?.find((s: any) => s?.id === p.id)
                )
                .map((p: any) => ({
                  ...p,
                  geo: {
                    lat: p.location.latitude,
                    lng: p.location.longitude,
                  },
                  type: "secondary",
                }))}
            />
            <GetMarkers
              data={selected?.map((p: any) => ({
                ...p,
                geo: {
                  lat: p.location.latitude,
                  lng: p.location.longitude,
                },
                type: "selected",
              }))}
            />
          </div>
        );
      })}
    </>
  );
};

const GetMarkers: React.FC<any> = ({ data, size, type, ...rest }) => {
  const [selected, setSelected] = useState<Place>();

  const markerDragEnd = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (!lat || !lng) return;
    geocodeLatLng({ lat, lng }).then((res) => {
      if (res.results.length === 0) return;
      placeDetails(res.results[0].place_id).then(
        (res) => console.log("res", res)
        // save changes for moved marker
      );
    });
  };

  const markerClick = (place: any) => {
    if (place?.type === "secondary") setSelected(place);
  };

  return (
    <>
      {data && data?.length > 0
        ? data.map((place: any, ind: number) => {
            const pos = {
              lat: place.geo?.lat,
              lng: place.geo?.lng,
            };
            return (
              <MarkerF
                onDragEnd={markerDragEnd}
                onClick={() => markerClick(place)}
                key={`${place.id}${place?.type || ind}`}
                position={pos}
                icon={{
                  url: `/${place?.type || "secondary"}-pin.svg`,
                  scaledSize: new google.maps.Size(size || 24, size || 24),
                }}
                {...rest}
              />
            );
          })
        : null}
      {selected && (
        <MapMarkerInfo marker={selected} close={() => setSelected(undefined)} />
      )}
    </>
  );
};

export default MapMarkers;

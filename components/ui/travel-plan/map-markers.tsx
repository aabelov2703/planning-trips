import { useAppContext } from "@/hooks/use-app-context";
import { geocodeLatLng, placeDetails } from "@/app/api/google/route";
import { MarkerF } from "@react-google-maps/api";
import MapMarkerInfo from "./map-marker-info";

const MapMarkers: React.FC<any> = () => {
  const { userPlaces, setSelectedMarker } = useAppContext();

  return (
    <>
      {userPlaces.map((place, ind) => {
        const { location, points } = place;
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
                ?.filter((p: any) => !p?.select)
                .map((p: any) => ({
                  ...p,
                  geo: {
                    lat: p.location.latitude,
                    lng: p.location.longitude,
                  },
                  type: "secondary",
                }))}
              setSelected={setSelectedMarker}
            />
            <GetMarkers
              data={points
                ?.filter((p: any) => p?.selected)
                .map((p: any) => ({
                  ...p,
                  geo: {
                    lat: p.location.latitude,
                    lng: p.location.longitude,
                  },
                  type: "selected",
                }))}
              setSelected={setSelectedMarker}
            />
          </div>
        );
      })}
    </>
  );
};

const GetMarkers: React.FC<any> = ({ data, size, type, ...rest }) => {
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
    rest?.setSelected && rest.setSelected(place);
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
      <MapMarkerInfo />
    </>
  );
};

export default MapMarkers;

import { useAppContext } from "@/hooks/use-app-context";
import { useCallback } from "react";
import { Polyline } from "@react-google-maps/api";

const MapPolyline: React.FC = () => {
  const { route } = useAppContext();

  const decodePolyline = useCallback(() => {
    const polyline = route?.routes[0].polyline.encodedPolyline;
    if (!polyline) return;
    const path = window.google.maps.geometry?.encoding?.decodePath(polyline);
    return path?.map((point) => ({ lat: point.lat(), lng: point.lng() }));
  }, [route]);

  return (
    <Polyline
      path={decodePolyline()}
      options={{
        strokeColor: "#0088EE",
        strokeOpacity: 0.7,
        strokeWeight: 5,
      }}
    />
  );
};

export default MapPolyline;

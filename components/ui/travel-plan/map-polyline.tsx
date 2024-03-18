import { Polyline } from "@react-google-maps/api";

const MapPolyline: React.FC<any> = ({ encodedPolyline }) => {
  const decodePolyline = (polyline: string) => {
    const path = window.google.maps.geometry?.encoding.decodePath(polyline);
    return path?.map((point) => ({ lat: point.lat(), lng: point.lng() }));
  };

  return (
    <Polyline
      path={decodePolyline(encodedPolyline)}
      options={{
        strokeColor: "#0088EE",
        strokeOpacity: 0.7,
        strokeWeight: 5,
      }}
    />
  );
};

export default MapPolyline;

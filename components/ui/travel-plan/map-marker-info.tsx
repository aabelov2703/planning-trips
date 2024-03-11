import { useAppContext } from "@/hooks/use-app-context";
import { InfoWindowF } from "@react-google-maps/api";
import Button from "@/components/common/button";
import PlusSvg from "../svg/plus";
import MinusSvg from "../svg/minus";
import { themeCommonStyles } from "@/utils/calcStyles";
import "./map-restyle.css";

const MapMarkerInfo: React.FC<any> = (props) => {
  const { marker } = props;
  const { theme } = useAppContext();

  return (
    <InfoWindowF
      position={marker.geo}
      onCloseClick={props.close}
      options={{ pixelOffset: new google.maps.Size(0, -20) }}
    >
      <div className="px-4 py-2 max-w-[320px]" style={themeCommonStyles(theme)}>
        <p className="text-sm">{marker?.name || marker?.displayName?.text}</p>
        {marker?.type === "secondary" && (
          <InfoWindowControls marker={marker} closeInfo={props.close} />
        )}
      </div>
    </InfoWindowF>
  );
};

const InfoWindowControls = ({ marker, ...rest }: any) => {
  const { current, userPlaces, setUserPlaces } = useAppContext();

  const addClick = () => {
    rest.closeInfo && rest.closeInfo();

    // get user Place
    const userPlace = userPlaces.find((p) => p.location.id === current.id);
    // get selected avoiding point doubles
    const selected = [
      ...(userPlace?.selected || []).filter((f: any) => f.id !== marker.id),
      userPlace?.points?.find((p: any) => p.id === marker.id),
    ];
    // renew state avoiding location doubles
    const newState = [
      ...userPlaces?.filter((p) => p.location.id !== current.id),
      { ...userPlace, selected },
    ];

    setUserPlaces(newState);
  };

  const deleteClick = () => {
    rest.closeInfo && rest.closeInfo();

    // get user Place
    const userPlace = userPlaces.find((p) => p.location.id === current.id);
    // get selected
    const selected = [
      ...(userPlace?.selected || []).filter((f: any) => f.id !== marker.id),
    ];
    // renew state
    const newState = [
      ...userPlaces?.filter((p) => p.location.id !== current.id),
      { ...userPlace, selected },
    ];

    setUserPlaces(newState);
  };

  console.log("marker", marker);

  return (
    <div className="mt-2">
      <div className="flex items-center h-6">
        <Button
          color="success"
          style={{ width: 20, height: 20, padding: 0 }}
          onClick={addClick}
        >
          <PlusSvg w={5} h={5} />
        </Button>
        <span>Add to wishlist</span>
      </div>
      {userPlaces
        .find((p) => p.location.id === current.id)
        ?.selected?.filter((p: any) => p.id === marker.id).length > 0 && (
        <div className="flex items-center h-6">
          <Button
            color="error"
            style={{ width: 20, height: 20, padding: 0 }}
            onClick={deleteClick}
          >
            <MinusSvg w={5} h={5} />
          </Button>
          <span>Remove from wishlist</span>
        </div>
      )}
    </div>
  );
};
export default MapMarkerInfo;

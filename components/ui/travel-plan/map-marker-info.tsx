import { useAppContext } from "@/hooks/use-app-context";
import { InfoWindowF } from "@react-google-maps/api";
import Button from "@/components/common/button";
import PlusSvg from "../svg/plus";
import MinusSvg from "../svg/minus";
import { themeCommonStyles } from "@/utils/calcStyles";
import "./map-restyle.css";

const MapMarkerInfo: React.FC<any> = () => {
  const { theme, selectedMarker, setSelectedMarker } = useAppContext();

  const closeInfo = () => setSelectedMarker(undefined);

  if (!selectedMarker) return;

  return (
    <InfoWindowF
      position={selectedMarker?.geo}
      onCloseClick={closeInfo}
      options={{ pixelOffset: new google.maps.Size(0, -20) }}
    >
      <div className="px-4 py-2 max-w-[320px]" style={themeCommonStyles(theme)}>
        <p className="text-sm">
          {selectedMarker?.name || selectedMarker?.displayName?.text}
        </p>
        <InfoWindowControls marker={selectedMarker} closeInfo={closeInfo} />
      </div>
    </InfoWindowF>
  );
};

const InfoWindowControls = ({ marker, ...rest }: any) => {
  const { current, userPlaces, setUserPlaces } = useAppContext();

  const updSelectedState = (isSelected = false) => {
    const currentLoc = userPlaces.find((p) => p.location.id === current.id);
    // selected points list for current location
    let selected = (currentLoc?.selected || []).filter(
      (f: any) => f.id !== marker.id
    );
    // new selected point
    if (isSelected)
      selected = [
        ...selected,
        currentLoc?.points?.find((p: any) => p.id === marker.id),
      ];

    const newState = [
      ...userPlaces?.filter((p) => p.location.id !== current.id),
      { ...currentLoc, selected },
    ];

    setUserPlaces(newState);
  };

  const addClick = () => {
    updSelectedState(true);
    rest.closeInfo && rest.closeInfo();
  };

  const deleteClick = () => {
    updSelectedState();
    rest.closeInfo && rest.closeInfo();
  };

  return (
    <div className="mt-2">
      {marker?.type === "secondary" && (
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
      )}
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

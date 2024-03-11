"use client";
import { useEffect, useRef, useState } from "react";
import Input from "../../common/input";
import { useAppContext } from "@/hooks/use-app-context";
import useOutsideClick from "@/hooks/use-outside-click";
import { searchStyles } from "@/utils/calcStyles";
import { placeTypesAutocomplete } from "@/context/google";

const MapAutocomplete: React.FC<any> = ({
  isLoaded,
  autocompleteRef,
  placesServiceRef,
  setShowSelectTypes,
  ...rest
}: any) => {
  const { theme, current, setCurrent, userPlaces, setUserPlaces } =
    useAppContext();
  const [toggled, setToggled] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [locations, setLocations] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const [sessionToken, setSessionToken] = useState<
    google.maps.places.AutocompleteSessionToken | undefined
  >(undefined);

  useOutsideClick(dropRef, () => setToggled(false));

  useEffect(() => {
    const isToggled = locations?.length > 0;
    setToggled(isToggled);
    setShowSelectTypes(false);
  }, [locations, setShowSelectTypes]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isLoaded) return;
    let timer: NodeJS.Timeout;
    let token: google.maps.places.AutocompleteSessionToken | undefined =
      sessionToken;
    if (!token) {
      token = new google.maps.places.AutocompleteSessionToken();
      setSessionToken(token);
    }
    const request = {
      input: inputValue,
      sessionToken: token,
      types: placeTypesAutocomplete,
    };
    if (inputValue.length >= 3) {
      timer = setTimeout(() => {
        if (autocompleteRef.current) {
          autocompleteRef.current.getPlacePredictions(
            request,
            (
              predictions: google.maps.places.AutocompletePrediction[] | null
            ) => {
              if (predictions) setLocations(predictions);
            }
          );
        }
      }, 500);
    } else {
      setLocations([]);
    }

    return () => clearTimeout(timer);
  }, [isLoaded, inputValue]);

  const optionClick = (place: any) => {
    const { place_id, description } = place;
    if (inputRef.current) inputRef.current.value = description;
    setToggled(false);

    const request: google.maps.places.PlaceDetailsRequest = {
      placeId: place_id,
      fields: ["geometry"],
      sessionToken: sessionToken,
    };

    if (placesServiceRef.current) {
      placesServiceRef.current.getDetails(
        request,
        (place: any, status: any) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            const location = {
              lat: place.geometry?.location.lat() || 0,
              lng: place.geometry?.location.lng() || 0,
            };
            const newLocation = {
              ...current,
              name: inputRef.current?.value,
              geo: location,
              id: place_id,
            };
            setCurrent(newLocation);
            if (!userPlaces.find((p) => p.location?.id === place_id)) {
              const newState = [...userPlaces, { location: newLocation }];
              setUserPlaces(newState);
            }
            setShowSelectTypes(true);
          } else {
            console.error("Place details request failed:", status);
          }
        }
      );
    }
    setSessionToken(undefined);
  };

  return (
    <div className={`f-wull text-sm`}>
      <Input
        ref={inputRef}
        id="autocomplete"
        placeholder="Select location"
        onChange={inputChange}
        locations={locations}
        style={{ ...searchStyles(theme), ...rest?.style }}
        {...rest}
      />
      {toggled ? (
        <div
          ref={dropRef}
          className={`w-full rounded-lg mt-[1px]`}
          style={searchStyles(theme)}
        >
          {locations?.map((location: any) => (
            <div
              key={location?.place_id}
              className={`hover:bg-slate-400 px-2 ${theme} `}
              onClick={() => optionClick(location)}
            >
              {location.description}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MapAutocomplete;

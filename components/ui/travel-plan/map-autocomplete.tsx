"use client";
import { useEffect, useRef, useState } from "react";
import Input from "../../common/input";
import { useAppContext } from "@/hooks/use-app-context";
import useOutsideClick from "@/hooks/use-outside-click";
import { searchStyles } from "@/utils/calcStyles";
import { placeTypesAutocomplete } from "@/context/google";
import { autoComplete, placeDetails } from "@/app/api/google/route";
import { v4 as uuidv4 } from "uuid";

const MapAutocomplete: React.FC<any> = ({
  isLoaded,
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
  const [sessionToken, setSessionToken] = useState<string | undefined>();

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
    let token = sessionToken;
    if (!token) {
      token = uuidv4();
      setSessionToken(token);
    }
    const request = {
      input: inputValue,
      includedPrimaryTypes: placeTypesAutocomplete,
      sessionToken: token,
    };

    if (inputValue.length >= 3) {
      timer = setTimeout(() => {
        autoComplete(request).then((res) => {
          if (res?.suggestions) setLocations(res?.suggestions);
        });
      }, 500);
    } else {
      setLocations([]);
    }

    return () => clearTimeout(timer);
  }, [isLoaded, inputValue]);

  const optionClick = (location: any) => {
    const { placeId, text } = location;
    if (inputRef.current) inputRef.current.value = text?.text;
    setToggled(false);
    const request = {
      placeId,
      fields: ["geometry"],
      sessionToken: sessionToken,
    };
    placeDetails(request).then((res: any) => {
      if (!res?.id) return;
      const location = {
        lat: res.location.latitude || 0,
        lng: res.location.longitude || 0,
      };
      const newLocation = {
        ...current,
        name: text?.text,
        geo: location,
        id: placeId,
      };
      setCurrent(newLocation);
      if (!userPlaces.find((p) => p.location?.id === placeId)) {
        const newState = [...userPlaces, { location: newLocation }];
        setUserPlaces(newState);
      }
      setShowSelectTypes(true);
      console.log("res", res);
    });
    console.log("location", location);
    console.log("inputRef.current.value", inputRef.current?.value);
    setSessionToken(undefined);
  };

  return (
    <div className={`f-wull text-sm`}>
      <Input
        ref={inputRef}
        id="autocomplete"
        placeholder="Select location"
        onChange={inputChange}
        style={{ ...searchStyles(theme), ...rest?.style }}
        {...rest}
      />
      {toggled ? (
        <div
          ref={dropRef}
          className={`w-full rounded-lg mt-[1px]`}
          style={searchStyles(theme)}
        >
          {locations?.map((prediction: any) => {
            const location = prediction.placePrediction;
            return (
              <div
                key={location.placeId}
                className={`hover:bg-slate-400 px-2 ${theme} `}
                onClick={() => optionClick(location)}
              >
                {location.text.text}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MapAutocomplete;

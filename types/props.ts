import { ReactNode } from "react";
import { LatLng, Place } from "./types";

export interface AppContextProps {
  current: Place;
  setCurrent: (currentLocation: Place) => void;
  theme: string;
  setTheme: (theme: string) => void;
  points: Place[];
  setPoints: (currentPlaces: Place[]) => void;
  userPlaces: any[];
  setUserPlaces: (userPlaces: any[]) => void;
  selectedMarker?: Place;
  setSelectedMarker: (selectedMarker?: Place) => void;
  route: any;
  setRoute: (route: any) => void;
}

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface Props extends BaseProps {
  [key: string]: any;
}

export interface Disabled {
  disabled?: boolean;
}

export interface ClickableProps extends BaseProps, Disabled, Props {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | null) => void;
}

export interface ChangableProps extends BaseProps, Disabled, Props {
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CommonProps extends ClickableProps, ChangableProps {}

export interface MapProps {
  startPosition?: LatLng;
}

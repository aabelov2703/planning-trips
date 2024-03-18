"use client";
import { AppContextProps, BaseProps } from "@/types/props";
import { Place } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

const placeInit = { name: "", geo: { lat: 0, lng: 0 } };

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<BaseProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState<Place>(placeInit);
  const [points, setPoints] = useState<Place[]>([]);
  const [userPlaces, setUserPlaces] = useState<any[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<Place | undefined>(
    undefined
  );

  // if exists init temporarily stored places
  useEffect(() => {
    const places = localStorage.getItem("places");
    if (places) setUserPlaces(JSON.parse(places));
  }, []);

  const appContextValues: AppContextProps = {
    theme,
    setTheme,
    current,
    setCurrent,
    points,
    setPoints,
    userPlaces,
    setUserPlaces,
    selectedMarker,
    setSelectedMarker,
  };

  return (
    <AppContext.Provider value={appContextValues}>
      {children}
    </AppContext.Provider>
  );
};

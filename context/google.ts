import { Libraries } from "@react-google-maps/api";

export const libraries: Libraries = ["places"];

export const geocodeResTypes = "street_address|point_of_interest|locality";

export const places = {
  fields: "id,displayName,location",
  fieldMask: "places.displayName,places.id,places.location",
};

export const routes = {
  fieldMask:
    "routes.duration,routes.distanceMeters,routes.legs.distanceMeters,routes.legs.duration,routes.legs.startLocation,routes.legs.endLocation",
};

export const placeTypesAutocomplete = ["locality"];

export const placeTypes: any[] = [
  { Culture: ["museum"] },
  {
    "Food and Drink": [
      "bakery",
      "bar",
      "cafe",
      "coffee_shop",
      "restaurant",
      "steak_house",
    ],
  },
  {
    Recreation: [
      "hiking_area",
      "historical_landmark",
      "park",
      "tourist_attraction",
      "zoo",
    ],
  },
];

export const mapOptions = {
  mapTypeControl: false,
  streetViewControl: false,
  zoomControl: true,
  rotateControl: false,
  scrollwheel: true,
  fullscreenControl: false,
};

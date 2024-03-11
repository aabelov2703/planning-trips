import { Libraries } from "@react-google-maps/api";

export const libraries: Libraries = ["places"];

export const resultTypesGeocode = "street_address|point_of_interest|locality";

export const placeDetailsF = "id,displayName,location";
export const placeDetailsFH = "places.displayName,places.id,places.location";

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

import { places, geocodeResTypes, routes } from "@/context/google";
import { LatLng } from "@/types/types";

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string;
const baseHeaders = {
  "Content-Type": "application/json",
  "X-Goog-Api-Key": key,
};

/* Places APIs */
const placesUrl = "https://places.googleapis.com/v1/places";
const searchNearby = ":searchNearby";
const autocomplete = ":autocomplete";

export const autoComplete = async (request: any) => {
  try {
    const url = placesUrl + autocomplete;
    const method = "POST";
    const headers = { ...baseHeaders };
    const body = JSON.stringify(request);
    const res = await fetch(url, { method, headers, body });
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const nearbySearch = async (request: any) => {
  try {
    const { includedTypes, locationRestriction } = request;
    const url = placesUrl + searchNearby;
    const headers = {
      ...baseHeaders,
      "X-Goog-FieldMask": places.fieldMask,
    };

    const body = JSON.stringify({ includedTypes, locationRestriction });
    const method = "POST";
    const res = await fetch(url, { method, headers, body });
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const placeDetails = async (request: any) => {
  const { placeId, sessionToken } = request;
  try {
    const url = placesUrl + "/" + placeId;
    const params = `?fields=${places.fields}&key=${key}&sessionToken=${sessionToken}`;
    const res = await fetch(url + params);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

/* Geocode APIs*/
const geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/";

export const geocodeLatLng = async (latlng: LatLng) => {
  try {
    const url = geocodeUrl + "json";
    const params = `?latlng=${latlng.lat},${latlng.lng}&result_type=${geocodeResTypes}&key=${key}`;
    const res = await fetch(url + params);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

/* Routes APIs */
const routesUrl = "https://routes.googleapis.com/directions/v2";
const compute = ":computeRoutes";

export const computeRoutes = async (request: any) => {
  try {
    const { intermediates } = request;
    const url = routesUrl + compute;
    const needOptimized = intermediates?.length > 1;
    const extraFields = needOptimized
      ? ",routes.optimized_intermediate_waypoint_index"
      : "";
    const headers = {
      ...baseHeaders,
      "X-Goog-FieldMask": routes.fieldMask + extraFields,
    };
    const body = JSON.stringify({
      ...request,
      optimizeWaypointOrder: needOptimized,
    });
    const method = "POST";
    const res = await fetch(url, { method, headers, body });
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

/*
  {
    "origin": {
      object (Waypoint)
    },
    "destination": {
      object (Waypoint)
    },
    "intermediates": [
      {
        object (Waypoint)
      }
    ],
    "travelMode": enum (RouteTravelMode),
    "routingPreference": enum (RoutingPreference),
    "polylineQuality": enum (PolylineQuality),
  "polylineEncoding": enum (PolylineEncoding),
  "departureTime": string,
  "arrivalTime": string,
  "computeAlternativeRoutes": boolean,
  "routeModifiers": {
    object (RouteModifiers)
  },
  "languageCode": string,
  "regionCode": string,
  "units": enum (Units),
  "optimizeWaypointOrder": boolean,
  "requestedReferenceRoutes": [
    enum (ReferenceRoute)
  ],
  "extraComputations": [
    enum (ExtraComputation)
  ],
  "trafficModel": enum (TrafficModel),
  "transitPreferences": {
    object (TransitPreferences)
  }
}
*/

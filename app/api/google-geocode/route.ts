import { resultTypesGeocode } from "@/context/google";
import { LatLng } from "@/types/types";

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string;
const baseUrl = "https://maps.googleapis.com/maps/api/geocode/";

export const geocodeLatLng = async (latlng: LatLng) => {
  try {
    const url = baseUrl + "json";
    const params = `?latlng=${latlng.lat},${latlng.lng}&result_type=${resultTypesGeocode}&key=${key}`;
    const res = await fetch(url + params);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

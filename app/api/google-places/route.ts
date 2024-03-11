import { placeDetailsF, placeDetailsFH } from "@/context/google";

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string;
const baseUrl = "https://places.googleapis.com/v1/";
const searchNearby = "places:searchNearby";

const baseHeaders = {
  "Content-Type": "application/json",
  "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
};

export const nearbySearch = async (request: any) => {
  try {
    const { includedTypes, locationRestriction } = request;
    const url = baseUrl + searchNearby;
    const headers = {
      ...baseHeaders,
      "X-Goog-FieldMask": placeDetailsFH,
    };

    const body = JSON.stringify({ includedTypes, locationRestriction });
    const method = "POST";
    const res = await fetch(url, { method, headers, body });
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const placeDetails = async (placeId: string) => {
  try {
    const url = baseUrl + "places/" + placeId;
    const params = `?fields=${placeDetailsF}&key=${key}`;
    const res = await fetch(url + params);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

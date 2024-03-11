export interface LatLng {
  lat: number;
  lng: number;
}

export interface Strings {
  [key: string]: string | undefined;
}

export interface Place {
  id?: string;
  geo?: LatLng | undefined;
  name?: string | undefined;
}

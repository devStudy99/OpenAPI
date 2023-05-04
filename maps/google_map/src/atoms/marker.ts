import { atom } from "jotai";

export const markerAtom = atom<google.maps.Marker | null>(null);

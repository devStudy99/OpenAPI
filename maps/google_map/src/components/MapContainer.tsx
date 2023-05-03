import React from "react";
import Map from "./Map";
import { useSetAtom } from "jotai";
import { mapAtom } from "../atoms/map";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const initMap = (map: google.maps.Map) => {
    setMap(map);
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;

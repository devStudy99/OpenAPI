import React from "react";
import { useSetAtom } from "jotai";
import Map from "./Map";
import { mapAtom } from "../atoms/map";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;

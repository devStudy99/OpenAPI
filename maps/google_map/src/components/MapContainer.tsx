import React from "react";
import Map from "./Map";
import { useSetAtom } from "jotai";
import { mapAtom } from "../atoms/map";
import { selectInfoAtom } from "../atoms/info";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const initMap = (map: google.maps.Map) => {
    setMap(map);

    google.maps.event.addListener(map, "click", () => {
      setSelectInfo(null);
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;

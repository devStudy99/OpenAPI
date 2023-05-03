import React from "react";
import { useSetAtom } from "jotai";
import Map from "./Map";
import { mapAtom } from "../atoms/map";
import { selectInfoAtom } from "../atoms/info";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);

    naver.maps.Event.addListener(map, "click", () => {
      setSelectInfo(null);
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;

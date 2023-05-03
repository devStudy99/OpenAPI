import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { mapAtom } from "../atoms/map";
import { infosAtom, selectInfoAtom } from "../atoms/info";
import { Info } from "../types/info";
import Marker from "./Marker";
import InfoWindow from "./InfoWindow";

function MarkersContainer() {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

  if (!map || !infos) return null;

  return (
    <>
      {infos.map((info: Info) => (
        <Marker
          key={info.id}
          map={map}
          position={info.position}
          content={`<div class="marker" />`}
          onClick={() => {
            setSelectInfo(info);
            map.panTo(info.position);
          }}
        />
      ))}
      {selectInfo && (
        <Marker
          key={selectInfo.id}
          map={map}
          position={selectInfo.position}
          content={'<div class="marker select" />'}
          onClick={() => {
            console.log("asd");
            setSelectInfo(null);
          }}
        />
      )}
      <InfoWindow map={map} selectInfo={selectInfo} />
    </>
  );
}

export default MarkersContainer;

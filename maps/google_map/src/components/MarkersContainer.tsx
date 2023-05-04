import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { mapAtom } from "../atoms/map";
import Marker from "./Marker";
import { infosAtom, selectInfoAtom } from "../atoms/info";
import { Info } from "../types/info";
import CircleIcon from "./custom_icons/CircleIcon";
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
          htmlIcon={CircleIcon("red")}
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
          htmlIcon={CircleIcon("blue")}
          onClick={() => {
            setSelectInfo(null);
          }}
        />
      )}
      <InfoWindow map={map} selectInfo={selectInfo} />
    </>
  );
}

export default MarkersContainer;

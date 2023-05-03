import React from "react";
import { useAtomValue } from "jotai";
import { mapAtom } from "../atoms/map";
import { infosAtom } from "../atoms/info";
import { Info } from "../types/info";
import Marker from "./Marker";

function MarkersContainer() {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);

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
            map.panTo(info.position);
          }}
        />
      ))}
    </>
  );
}

export default MarkersContainer;

import React from "react";
import MapContainer from "./components/MapContainer";
import { useSetAtom } from "jotai";
import { infosAtom } from "./atoms/info";
import { infos } from "./data/infos";
import MarkersContainer from "./components/MarkersContainer";

function App() {
  const setInfos = useSetAtom(infosAtom);

  if (infos) {
    setInfos(infos);
  }

  return (
    <>
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default App;

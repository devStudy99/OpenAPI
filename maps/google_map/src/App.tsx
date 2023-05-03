import React from "react";
import MapContainer from "./components/MapContainer";
import { Wrapper } from "@googlemaps/react-wrapper";
import { infosAtom } from "./atoms/info";
import { useSetAtom } from "jotai";
import { infos } from "./data/infos";
import MarkersContainer from "./components/MarkersContainer";

function App() {
  const setInfos = useSetAtom(infosAtom);

  if (infos) {
    setInfos(infos);
  }
  return (
    <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
      <MapContainer />
      <MarkersContainer />
    </Wrapper>
  );
}

export default App;

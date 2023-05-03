import React from "react";
import MapContainer from "./components/MapContainer";
import { Wrapper } from "@googlemaps/react-wrapper";

function App() {
  return (
    <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
      <MapContainer />;
    </Wrapper>
  );
}

export default App;

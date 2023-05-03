import React, { useEffect } from "react";

interface MapProps {
  width: string;
  height: string;
  initMap?: (map: google.maps.Map) => void;
}

function Map({ width, height, initMap }: MapProps) {
  useEffect(() => {
    const mapOptions = {
      center: new google.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    const map: google.maps.Map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      mapOptions
    );

    if (initMap) {
      initMap(map);
    }
  }, []);

  return <div id="map" style={{ width, height }}></div>;
}

export default Map;

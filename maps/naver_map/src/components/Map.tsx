import React, { useEffect } from "react";

interface MapProps {
  width: string;
  height: string;
  initMap?: (map: naver.maps.Map) => void;
}

function Map({ width, height, initMap }: MapProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };

      const map = new naver.maps.Map("map", mapOptions);

      if (initMap) {
        initMap(map);
      }
    };
  }, []);

  return <div id="map" style={{ width, height }}></div>;
}

export default Map;

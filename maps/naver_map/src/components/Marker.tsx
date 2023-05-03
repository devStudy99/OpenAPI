import React, { useEffect } from "react";

interface MarkerProps {
  map: naver.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  onClick?: () => void;
}

function Marker({ map, position, content, onClick }: MarkerProps) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(position),
        icon: {
          content,
        },
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, "click", onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
}

export default Marker;

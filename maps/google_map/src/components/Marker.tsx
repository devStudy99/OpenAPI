import React, { useEffect } from "react";

interface MarkerProps {
  map: google.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  onClick?: () => void;
  htmlIcon: {
    url: string;
    scaledSize: google.maps.Size;
    origin: google.maps.Point;
    anchor: google.maps.Point;
  };
}

function Marker({ map, position, onClick, htmlIcon }: MarkerProps) {
  useEffect(() => {
    let marker: google.maps.Marker | null = null;
    if (map) {
      marker = new google.maps.Marker({
        map,
        position: new google.maps.LatLng(position),
        icon: htmlIcon,
      });
    }

    if (onClick && marker) {
      google.maps.event.addListener(marker, "click", onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
}

export default Marker;

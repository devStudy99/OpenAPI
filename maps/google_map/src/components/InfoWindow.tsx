import React, { useEffect, useState } from "react";
import { Info } from "../types/info";
import { useAtomValue } from "jotai";
import { markerAtom } from "../atoms/marker";

interface InfoWindowProps {
  map: google.maps.Map;
  selectInfo: Info | null;
}

function InfoWindow({ map, selectInfo }: InfoWindowProps) {
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
    null
  );
  const marker = useAtomValue(markerAtom);

  useEffect(() => {
    const _infoWindow = new google.maps.InfoWindow({
      content: "",
      pixelOffset: new google.maps.Size(0, -10),
    });
    setInfoWindow(_infoWindow);

    return () => {
      _infoWindow?.setValues(null);
    };
  }, []);

  useEffect(() => {
    if (!infoWindow || !map) return;
    if (selectInfo) {
      infoWindow.setContent(InfoWindowMaker(selectInfo));
      infoWindow.open(map, marker);
    } else {
      infoWindow.close();
    }
  }, [map, marker, selectInfo]);

  return null;
}

function InfoWindowMaker(selectInfo: Info) {
  const infoWindowBox = document.createElement("div");
  infoWindowBox.className = "infoBox";

  const infoWindowPlace = document.createElement("div");
  infoWindowPlace.className = "infoPlaceName";
  infoWindowPlace.innerHTML = `${selectInfo.placeName}`;
  infoWindowBox.appendChild(infoWindowPlace);

  const infoWindowAddress = document.createElement("div");
  infoWindowAddress.className = "infoAddressName";
  infoWindowAddress.innerHTML = `${selectInfo.addressName}`;
  infoWindowBox.appendChild(infoWindowAddress);

  return infoWindowBox;
}

export default InfoWindow;

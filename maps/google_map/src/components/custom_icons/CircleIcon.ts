import React from "react";

const CircleIcon = (color: string) => {
  const redIcon = {
    url:
      "data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="0.5" cx="10" cy="10" r="7"/><circle fill="#f00" cx="10" cy="10" r="7"/></svg>'
      ),
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20),
  };

  const blueIcon = {
    url:
      "data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="0.5" cx="10" cy="10" r="7"/><circle fill="#0d00ff" cx="10" cy="10" r="7"/></svg>'
      ),
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20),
  };
  return color === "red" ? redIcon : blueIcon;
};

export default CircleIcon;

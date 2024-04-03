import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  return <h1>{status}</h1>;
};

const MyMapComponent = ({ center, zoom }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom,
      }));
    }
  }, [ref, map]);

  return <div ref={ref} style={{ width: "500px", height: "500px" }} />;
};

export default function GoogleMap() {
  const center = { lat: 48.8584, lng: 2.2945 }; // 에펠탑의 좌표
  const zoom = 12;
  const API_KEY = '';
  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}

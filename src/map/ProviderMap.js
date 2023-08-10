import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import './ProviderMap.css'
import { Icon } from "leaflet";
import { Link } from "react-router-dom";

function ProviderMap ({providers}) {

  const customIcon = new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/6731/6731177.png",
    iconSize:[38, 38],
  });

  return (
    <MapContainer center={[1.3521, 103.8198 ]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {providers.map(p => (
        <Marker position={p.coordinates} icon={customIcon}>
          <Popup>{p.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ProviderMap;
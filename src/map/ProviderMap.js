import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Col, Container, Row } from "react-bootstrap";

import './ProviderMap.css';

/**
 *
 * ProviderMap
 *
 * Map to display the location of provider(s) with popups
 *
 * state:
 * - none
 *
 * props:
 * - providers: array of providers [{address, name, id,...},...]
 * - coordinates: center of map [1.3521, 103.8198] (default)
 *
 * {App, ProviderDetails} => ProviderMap
 */
function ProviderMap({ providers, coordinates }) {
  const center = coordinates ? [+coordinates[0], +coordinates[1]] : [1.3521, 103.8198];


  const mapIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/6731/6731177.png",
    iconSize: [38, 38],
  });

  return (
    <Container>
      <Row>
        <Col>
          <MapContainer center={center} zoom={11.5}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {providers.map(p => (
              <Marker key={p.id} position={p.coordinates} icon={mapIcon}>
                <Popup>{p.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default ProviderMap;
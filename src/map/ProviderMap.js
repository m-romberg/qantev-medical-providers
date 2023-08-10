import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import './ProviderMap.css';
import { Icon } from "leaflet";
import { Col, Container, Row } from "react-bootstrap";

/**
 *
 * ProviderMap
 *
 * Map to Display the location of provider(s) with popups
 *
 * state:
 * - none
 *
 * props:
 * - providers: array of providers [{address, name, id,...},...]
 * - coordinates: center of map [1.98, 48.654]
 *
 * {App, ProviderDetails} => ProviderMap
 */
function ProviderMap({ providers, coordinates }) {
  const center = coordinates ? [+coordinates[0], +coordinates[1]] : [1.3521, 103.8198];


  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/6731/6731177.png",
    iconSize: [38, 38],
  });

  return (
    <Container>
      <Row>
        <Col>

          <MapContainer center={center} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {providers.map(p => (
              <Marker key={p.id} position={p.coordinates} icon={customIcon}>
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
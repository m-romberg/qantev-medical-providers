import { Col, Container, Row } from 'react-bootstrap';
import './Homepage.css';
import ProviderTable from './providers/ProviderTable';
import ProviderMap from './map/ProviderMap';

/**
 * Homepage
 *
 * Homepage for app.
 *
 * Displays table and map for medical providers.
 *
 * state:
 * - none
 *
 * props:
 * - providers: array of providers [{address, name, id,...},...]
 *
 * RoutesList --> Homepage --> { ProviderTable, ProviderMap }
 *
 */
function Homepage({ providers }) {

  return (
    <Container className="Homepage">
      <Row>
        <Col>
          <h1>Medical Providers</h1>
        </Col>
      </Row>
      <Row className="Homepage-providers-table">
        <Col>
          <ProviderTable providers={providers} />
        </Col>
        <Col>
          <ProviderMap providers={providers} />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
import './ProviderDetails.css';

import { useParams } from "react-router-dom";
import formatNumber from '../helpers/formatNumber';
import ProviderMap from '../map/ProviderMap';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * ProviderDetails
 *
 * Visual component to display information on a single medical provider
 *
 * state:
 * - none
 *
 * props:
 * - providers: array of providers [{address, name, id,...},...]
 *
 * RoutesList --> ProviderDetails -> ProviderMap
 */
function ProviderDetails({ providers }) {

  const { providerId } = useParams();

  if (!providers) return <div> No providers.</div>;

  const details = providers.find((p) => p.id === +providerId);

  details.average_inpatient_claim_cost = formatNumber(
    details.average_inpatient_claim_cost
  );
  details.average_outpatient_claim_cost = formatNumber(
    details.average_outpatient_claim_cost
  );
  details.total_cost = formatNumber(
    details.total_cost
  );


  return (
    <Container className="ProviderDetails">
      <Row>
        <Col>
          <h2>{details.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Address: {details.address}</p>
          <p>Coordinates : {details.coordinates[0]} {details.coordinates[1]}</p>
          <p>Phone number: {details.phone_number}</p>
          <p>Average patient age: {details.average_patient_age} years old</p>
          <p>
            Average inpatient claim cost: ${details.average_inpatient_claim_cost}
          </p>
          <p>
            Average outpatient claim cost: ${details.average_outpatient_claim_cost}
          </p>
          <p>Total cost: ${details.total_cost}</p>
          <ProviderMap providers={[details]} coordinates={details.coordinates} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProviderDetails;
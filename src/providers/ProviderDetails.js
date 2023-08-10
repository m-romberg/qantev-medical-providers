import './ProviderDetails.css';

import { useParams } from "react-router-dom";
import formatNumber from '../helpers/formatNumber';
import snakeCaseToCapitalText from '../helpers/snakeCaseToCapitalText';
import ProviderMap from '../map/ProviderMap';
import { Container, Row, Col, Table } from 'react-bootstrap';

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

  const currency = "$";
  const details = providers.find((p) => p.id === +providerId);
  const details_keys = Object.keys(details);
  const details_keys_of_interest = details_keys.filter(k => (k !== "name" && k !== "id" && k !== "coordinates" ))

  //formats numbers for display 19900 => $19,900
  details.average_inpatient_claim_cost = currency.concat(formatNumber(
    details.average_inpatient_claim_cost
  ));
  details.average_outpatient_claim_cost = currency.concat(formatNumber(
    details.average_outpatient_claim_cost)
  );
  details.total_cost = currency.concat(formatNumber(
    details.total_cost)
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
          <Table size={"sm"} className="ProviderDetails-table">
            <thead>
              <tr>
                <th colSpan={2}>Information</th>
              </tr>
            </thead>
            <tbody>
              {details_keys.map((k) => {
                if (k !== "id" && k !== "coordinates"){
                  return (
                    <tr key={k}>
                  <td>{snakeCaseToCapitalText(k)}</td>
                  <td>{details[k]}</td>
                </tr>
                  )
                }}

                )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProviderMap providers={[details]} coordinates={details.coordinates} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProviderDetails;
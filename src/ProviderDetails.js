import './ProviderDetails.css';

import { useParams } from "react-router-dom";

/**
 * ProviderDetails
 *
 * Visual component to display information on a single medical provider
 *
 * state:
 * - none
 *
 * props:
 * - XXX
 *
 * RoutesList --> ProviderDetails
 */
function ProviderDetails({ providers}) {

  const { providerId } = useParams();

  if (!providers) return <div> No providers.</div>
  const details = providers.find((p) => p.id === +providerId);

  return (
    <div className="ProviderDetails">
      <h2>{details.name}</h2>
        <p>Address: {details.address}</p>
        <p>Coordinates : {details.coordinates[0]} {details.coordinates[1]}</p>
        <p>Phone number: {details.phone_number}</p>
        <p>Average patient age: {details.average_patient_age} years old</p>
        <p>Average inpatient claim cost: ${details.average_inpatient_claim_cost}</p>
        <p>Average outpatient claim cost: ${details.average_outpatient_claim_cost}</p>
        <p>Total cost: ${details.total_cost}</p>
    </div>
  );
}

export default ProviderDetails;
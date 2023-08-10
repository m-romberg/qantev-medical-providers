import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProviderTable.css';


/**
 * ProviderTable
 *
 * Visual component to display medical providers in a table with
 * links to providers page
 *
 * state:
 * - none
 *
 * props:
 * - providers: array of providers [{address, name, id,...},...]
 *
 * Homepage --> ProviderTable
 */
function ProviderTable({ providers }) {

  if (!providers) {
    return <div className="ProviderTable"> Sorry no providers.</div>;
  };

  const sortedProviders = providers.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container className="ProviderTable">
      <Row>
        <Col>
          <Table size={"sm"} className="ProviderTable-table">
            <thead>
              <tr>
                <th> Click to view provider</th>
              </tr>
            </thead>
            <tbody>
              {sortedProviders.map((p) =>
                <tr key={p.id}>
                  <td>
                    <Link to={`/providers/${p.id}`}>{p.name}</Link>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

    </Container>
  );
}

export default ProviderTable;
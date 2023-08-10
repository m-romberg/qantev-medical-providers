import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProviderTable.css';


/**
 * ProviderTable
 *
 * Visual component to display medical providers in a table
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

  return (
    <Container className="ProviderTable">
      <table>
        <thead>
          <tr>
            <th>Medical Providers</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((p) =>
            <tr key={p.id}>
              <td>
                <Link to={`/providers/${p.id}`}>{p.name}</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}

export default ProviderTable;
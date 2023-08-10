import './ProviderTable.css';

import { Link } from 'react-router-dom';

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
    return <div className="ProviderTable"> Sorry no providers.</div>
  };

  return (
    <div className="ProviderTable">
        <table>
            <thead>
                <tr>
                    <th>Medical Providers</th>
                </tr>
            </thead>
            <tbody>
            {providers.map((p) =>
                <tr>
                    <td key={p.id}>
                        <Link to={`/providers/${p.id}`}>{p.name}</Link>
                    </td>
                </tr>
            )}
            </tbody>
        </table>

    </div>
  );
}

export default ProviderTable;
import './Homepage.css';
import ProviderTable from './ProviderTable';
import ProviderMap from './map/ProviderMap';

/**
 * Homepage
 *
 * Homepage for app.
 *
 * Displays table for medical providers.
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
    <div className="Homepage">
      <ProviderTable providers={providers} />
      <ProviderMap providers={providers} />
    </div>
  );
}

export default Homepage;
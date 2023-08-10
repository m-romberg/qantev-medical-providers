import './Homepage.css';
import ProviderTable from './ProviderTable';

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
 * - none
 *
 * RoutesList --> Homepage --> ProviderTable
 *
 */
function Homepage({ providers }) {
  return (
    <div className="Homepage">
      <ProviderTable providers={providers} />
    </div>
  );
}

export default Homepage;
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
function Homepage() {
  return (
    <div className="Homepage">
      <ProviderTable />
    </div>
  );
}

export default Homepage;
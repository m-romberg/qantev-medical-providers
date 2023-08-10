import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';

import providers from './assets/data_sample.json';

/**
 *
 * App
 *
 * Controls app.
 *
 * App -> RoutesList
 */
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <RoutesList providers={providers} />
    </BrowserRouter>

    </div>
  );
}

export default App;

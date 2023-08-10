import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';

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
      <RoutesList />
    </BrowserRouter>

    </div>
  );
}

export default App;

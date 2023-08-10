import { BrowserRouter } from "react-router-dom";

import './App.css';
import RoutesList from './RoutesList';
import providers from './assets/data_sample.json';
import { Container } from "react-bootstrap";


/**
 *
 * App
 *
 * Controls app. Passes down providers
 *
 * App -> RoutesList
 */
function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <RoutesList providers={providers} />
      </BrowserRouter>
    </Container>
  );
}

export default App;

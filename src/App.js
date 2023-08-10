import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

import './App.css';
import RoutesList from './RoutesList';
import Navigation from "./Navigation";
import providers from './assets/data_sample.json';


/**
 *
 * App
 *
 * Controls app. Passes down providers
 *
 * App -> {RoutesList, Navigation}
 */
function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList providers={providers} />
      </BrowserRouter>
    </Container>
  );
}

export default App;

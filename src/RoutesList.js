import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProviderDetails from "./ProviderDetails";
import Homepage from "./Homepage";

/**
 * RoutesList
 *
 * Holds routes for app
 *
 * state:
 *
 * props:
 * - providers
 *
 *
 * App --> RoutesList --> { Homepage, ProviderDetails }
 */

function RoutesList({ providers }) {


  return (
  <div className="RoutesList">
    <Routes>
      <Route path="/" element={<Homepage providers={providers} />} />
      <Route
        path="/providers/:providerId"
        element={<ProviderDetails providers={providers} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </div>);
}

export default RoutesList;